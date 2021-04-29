var amqp = require('amqplib/callback_api');

async function recieveFromQueue(callback) {
        
        amqp.connect('amqp://localhost', function(error0, connection) {
            if (error0) {
                reject(error0);
            }
            connection.createChannel(function(error1, channel) {
                if (error1) {
                    reject(error1);
                }

                var queue = 'upload';

                channel.assertQueue(queue, {
                    durable: false
                });

                console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

                channel.consume(queue, callback, {
                    noAck: true
                });
            });
        });
}

module.exports = recieveFromQueue;