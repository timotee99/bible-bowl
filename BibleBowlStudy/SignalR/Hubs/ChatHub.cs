using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace BibleBowlStudy.SignalR.Hubs
{
    public class ChatHub : Hub
    {
        public void Send(string name, string message)
        {
            // Call the addNewMessageToPage method to update clients.
            Clients.All.addNewMessageToPage(name, message);
        }

        public void Send1()
        {
            // Call the addNewMessageToPage method to update clients.
            Clients.All.send("message");
        }

        public Task JoinGroup(string groupName)
        {
            return Groups.Add(Context.ConnectionId, groupName);
        }

        public Task LeaveGroup(string groupName)
        {
            return Groups.Remove(Context.ConnectionId, groupName);
        }
    }
}