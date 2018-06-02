module.exports.chat = (app, req, res) => {
  const bodyData = req.body;
  req.assert('nick', 'Name not be empty').notEmpty();
  req.assert('nick', 'Name must be between 3 and 15 carachter').len(3, 15);
  const err = req.validationErrors();
  if (err) {
    res.render('index', { errors: err });
  } else {
    app.get('io').emit('msgChat', { nickname: bodyData.nick, msg: 'came in the chat' });
    res.render('chat', { formData: bodyData });
  }
};
