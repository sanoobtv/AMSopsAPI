module.exports = function(app, db) {
  //INSERT SECTION OF THE API, FETCHES BODY PARAMETERS AND INSERT IT IN TO THE DATABASE
  app.post('/kioskIP', (req, res) => {
    var kioskIP = {
      KIOSKID: req.body.KIOSKID,
      KIOSKIP: req.body.KIOSKIP
    };
    db.collection('List').insert(kioskIP, (err, result) => {
      if (err) {
        res.send({
          'error': 'Encountered an error inserting'
        });
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  app.get('/kioskIP/:id', (req, res) => {
    var id = req.params.id;
    console.log(id);
    var name = {
      'KIOSKID': id
    };
    db.collection('List').findOne(name, (err, item) => {
      if (err) { res.send({'error': 'Error cannot read'});}
      else { res.send(item);}
    })
  });
};
