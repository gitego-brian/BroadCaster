import jwt from 'jsonwebtoken';
import { records } from '../data/data';
import transporter from '../config/mailerConfig';

class Helpers {
  static sendSuccess(res, status, message, data) {
    res.status(status).send({
      status,
      message,
      data,
    });
  }

  static sendError(res, status, error) {
    res.status(status).send({
      status,
      error,
    });
  }

  static checkJoiError(error, res, next) {
    if (error) {
      this.sendError(
        res,
        400,
        error.details[0].message.replace(/[/"]/g, ''),
      );
    } else next();
  }

  static genToken({
    id, firstName, lastName, email, isAdmin,
  }) {
    return jwt.sign({
      id, firstName, lastName, email, isAdmin,
    }, process.env.JWT_KEY);
  }

  static serverError(status, message) {
    const error = new Error();
    error.status = status;
    error.message = message;
    throw error;
  }

  static setId(array) {
    if (array.length < 1) return array.length + 1;
    return array[array.length - 1].id + 1;
  }

  static sendUserRecordsByType(res, id, isAdmin, type) {
    const result = [];
    if (isAdmin) {
      records.forEach((record) => {
        if (record.type === type) result.push(record);
      });
    } else {
      records.forEach((record) => {
        if (`${record.authorId}` === `${id}` && record.type === type) result.push(record);
      });
    }

    Helpers.sendSuccess(res, 200, 'Records fetched successfully', { records: result });
  }

  static findUserRecord(recordId, isAdmin, authorId) {
    if (isAdmin) return records.find((rec) => (`${rec.id}` === recordId));
    return records.find((rec) => (`${rec.id}` === recordId) && (`${rec.authorId}` === `${authorId}`));
  }

  static async sendEmail(to, name, title, status) {
    const mailOptions = {
      from: '"BroadCaster" <noreply@broadcaster.com>',
      to,
      subject: 'Update from Broadcaster',
      html: `<b>Hi ${name}</b><br>
      Your record with title <b style="color:#333333;">${title}</b> status has been set to <b style="color:#333333;text-transform:uppercase;">${status}</b>`,
    };
    await transporter.sendMail(mailOptions);
  }
}

export default Helpers;