# fa_dict_info

**dict_info** works on fanuc robot controllers. Sometimes I have the problem, that I do not know the IDs of an dictionary element. So I wrote me a program to look up the ids for me.

## Install

first use the ktrans program to create a .PC file from the dictinfo.kl file. The program creates a CGI style webservice. Some settings has to be done bevor the nodejs client can connect to the robot controller.

1. create a .env file:
```
URL=<robot url>
DICT=<directory name>
```
2. install all nodejs packages
```
npm install
```
3. create the .PC file (in this eample the pc file is dictinfo.pc named)
```
ktrans.exe dictinfo.kl
```
4. copy the .PC file to the robot contoller
```
ftp <robot_url>
ftp> get dictinfo.pc
ftp> quit
```
5. open the KAREL Browser execution on the controller in the HostComm Settings
6. start the application
```
npm start
```

This application jjust runs until a -1 id is returned from the robot controller. This means, that there is an error or no data is found. This is just a very small example so you can try to make a better use.