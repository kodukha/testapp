var service = require('./../services/batchService');

exports.processBatch = function(req, res) {
  let result = {}; 
  try {
	result = service.processBatch (req.body.url, req.body.verb);
	res.status(200).send({
      success: 'true',
      message: 'my batch request is complete',
      data: result.data
    });
  } catch (error) {
	res.status(500).send({
      success: 'false',
      message: 'my batch request is failed',
      error: error.message
    });
  }
};