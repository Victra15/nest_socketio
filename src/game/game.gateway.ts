import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { SocketIoDto } from './dto/socket-io.dto';
import { Socket } from 'dgram';
import { Namespace } from 'socket.io';

@WebSocketGateway({namespace: 'game'})
// implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
export class GameGateway {

  @WebSocketServer() game_server: Server;

  @SubscribeMessage('message-games')
  handleMessage(client: Socket, payload: SocketIoDto){
	console.log(this.game_server);
    this.game_server.of("/chat").emit('message', payload);
  }
}
