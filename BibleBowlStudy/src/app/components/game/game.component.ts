import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { IConnectionOptions, ISignalRConnection, SignalR } from 'ng2-signalr';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public $: any;
  private signalRConnection: ISignalRConnection;

  constructor(private signalR: SignalR) { }

  ngOnInit() {

    this.signalR.connect().then(connection => {
      this.signalRConnection = connection;

      let onMessageSent123$ = this.signalRConnection.listenFor('send');
      onMessageSent123$.subscribe((msg: any) => {
        console.log(msg);
      });

      let onMessageSent1234$ = this.signalRConnection.listenFor('send1');
      onMessageSent1234$.subscribe((msg: any) => {
        console.log(msg);
      });


    });



    $('button').click( () => {
      
     // this.signalRConnection.invoke('Send', new ChatMessage('aaa','bb')).then((data: string[]) => {
        this.signalRConnection.invoke('Send', 'aaa','bb').then((data: string[]) => {
         console.log(data);
      });
    });

/*
    // Reference the auto-generated proxy for the hub.  
    var chat = $.connection.chatHub;
    // Create a function that the hub can call back to display messages.
    chat.client.addNewMessageToPage = function (name, message) {
      // Add the message to the page. 
      $('#discussion').append('<li><strong>' + name
        + '</strong>: ' + message + '</li>');
    };
    // Get the user name and store it to prepend to messages.
    $('#displayname').val(prompt('Enter your name:', ''));
    // Set initial focus to message input box.  
    $('#message').focus();
    // Start the connection.
    $.connection.hub.start().done(function () {
      $('#sendmessage').click(function () {
        // Call the Send method on the hub. 
        chat.server.send($('#displayname').val(), $('#message').val());
        // Clear text box and reset focus for next comment. 
        $('#message').val('').focus();
      });
    });
    */
  }

}


export class ChatMessage {
  constructor(public name: string, public message: string) {
  }
}