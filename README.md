# ChadGPT-Chat 🤖

ChadGPT-Chat is a simple messaging application with integrated AI bots powered by ChatGPT API. The project is designed to showcase the capabilities of the ChatGPT API and to demonstrate how it can be integrated into real-world applications.

## 🔧 Getting Started:

- To get started with ChadGPT-Chat, you will need to have Node.js and npm installed on your machine. Once you have these installed, you can clone this repository by running the following command in your terminal:
`git clone https://github.com/Eugene-Mokrushin/chadGPT-chat-public.git`

- Next, navigate to the project directory and install the required dependencies by running the following command:
`npm install` || `npm ci`

- Navige to the server folder and start the server: `npm run dev`.

- Do the same with the client folder to start the front. Start it with `npm run dev`.

- Set your keys, account and your profile in [Chat Engine](https://chatengine.io/).

- ⚠️ Don't forget to put your API keys from OpenAI into `.env` on the server AND keys for connecting to the server and Chat Engine into `.env.local` on the client.

## 💬 Using the Application:

Once you have the application running, you can start sending messages to the integrated AI bots. The application currently supports three bots:

To create a new dialog with ChatGPT bot and it to your messages exactly like Ai(Bot Type)_AnyName. 

- **AiChat_** - just a normal one-liner with the ChatGPT. Write it whatever you want it will reply you back.

- **AiCode_** - message him your code problem. It will reply without any explanation, only with the code solution it thinks that right.

- **AiAssist_** - it auto-assits you when you typing, finishing your sentance.

## 🪪 License:
ChadGPT-Chat is licensed under the MIT license. See the LICENSE file for more information.



