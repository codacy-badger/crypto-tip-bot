import jayson from '../jayson';
import UserModel from '../models/users';

export async function run(client, message) {
  const userID = message.author.id;

  UserModel.findOne({ userId: userID }, (err, user) => {
    if (err) throw err;

    if (user) {
      message.channel.send({
        embed: {
          color: 6610199,
          fields: [{
            name: 'Your deposit address :',
            value: user.address
          }]
        }
      });
    } else {
      message.channel.send({
        embed: {
          color: 16755456,
          fields: [{
            name: 'Your deposit address :',
            value: 'Generating...'
          }]
        }
      })
        .then((msg) => {
          jayson.getNewAddress((userADDRESS) => {
            const User = UserModel({
              userId: userID,
              address: userADDRESS
            });

            User.save({ new: true }, (error, newUser) => {
              if (error) throw error;

              msg.delete()
                .then(
                  message.channel.send({
                    embed: {
                      color: 6610199,
                      fields: [{
                        name: 'Your deposit address :',
                        value: newUser.address
                      }]
                    }
                  })
                );
            });
          });
        });
    }
  });
}

export const conf = {
  enabled: true,
  admin_only: false,
  guild_only: false
};

export const help = {
  name: 'address',
  description: 'Check your deposit address, and create one if none is found.',
  usage: 'address',
  aliases: []
};
