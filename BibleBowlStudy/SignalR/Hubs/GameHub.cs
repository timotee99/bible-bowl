using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace BibleBowlStudy.SignalR.Hubs
{
    public class GameHub : Hub
    {
        public void Send(string name, string message)
        {
            Clients.All.hello();
        }

        public async Task Message(string msg)
        {
            await Clients.All.something();
        }
    }
}