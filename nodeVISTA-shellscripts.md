### nodeVISTA - Shell scripts

```
                 _    __     _____ ____ _____  _
 _ __   ___   __| | __\ \   / /_ _/ ___|_   _|/ \
| '_ \ / _ \ / _` |/ _ \ \ / / | |\___ \ | | / _ \
| | | | (_) | (_| |  __/\ V /  | | ___) || |/ ___ \
|_| |_|\___/ \__,_|\___| \_/  |___|____/ |_/_/   \_\

       Website: http://vistadataproject.info
       Master Data Model-Driven Node.js VISTA
-----------------------------------------------------
Server Status:       nv- reload | halt | status
Server Access:       nv- ssh | ssh-web
Web Clients:         nv-vdm-browser | nv-manager
CPRS Client:         cprs-client cprs-vm
-----------------------------------------------------
```

These are *optional* post-installation shell scripts that make using the nodeVISTA server and services on 'nix based computers easier.  For instructions on installing the nodeVISTA demo see instructions on the main demo page.  


## Host System: Utility functions
* Macintosh
```
# Install homebrew  (https://brew.sh/)
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

#Install figlet
brew install figlet
```

* Linux
``` 
# Install figlet
sudo apt-get install figlet
```


## Host System: Shell scripts
On host system user's root directory  (~/ ), create two files with the following contents

### nv.sh
``` sh
# nodeVISTA Shell 
#/ ----------------------------------------------------------------------
clear
figlet  nodeVISTA
echo '      Website: http://vistadataproject.info '
echo '     Master Data Model-Driven Node.js VISTA  '
echo ' -----------------------------------------------------'
echo ' Server Status:       nv- reload | halt | status'
echo ' Server Access:       nv- ssh | ssh-web  (vdp/vdp)'\
echo ' Web Clients:         nv-vdm-browser | nv-manager'
echo ' CPRS Client:         cprs-client cprs-vm'
echo ' -----------------------------------------------------'
```



### .profile  (dot profile)
``` sh
#/ nodeVISTA commands and aliases
#/ -----------------------------------------------------------------------
#/ NOTE:  the paths to vagrant, git, and wine depend on invidual preferences. 

alias nv='clear; sh ~/nv.sh'

#/ Server Status
alias nv-reload='cd ~/vagrant/nodeVISTA/setup; vagrant reload; nv-status'
alias nv-halt='cd ~/vagrant/nodeVISTA/setup; vagrant halt; nv-status'
alias nv-status='cd ~/vagrant/nodeVISTA/setup; nv; vagrant status'

#/ Server Access
#/ Direct terminal:
alias nv-ssh='echo "nodeVISTA ssh user/pass: vdp/vdp"; ssh vdp@10.2.2.100'
#/ Web terminal: Requires installation in guest VM:  sudo apt-get install shellinabox
alias nv-ssh-web='echo "nodeVISTA ssh user/pass: vdp/vdp"; open https://10.2.2.100:4200/'

#/ Web Clients
#/ VDM Browser (Fileman Schema Browser)
alias nv-vdm-browser='open http://10.2.2.100:9000'
#/ NodeVISTA Manager 
alias nv-manager='open http://10.2.2.100:9020/#rpcCounts'

#/ CPRS Client
#/ Win Emulation: Install Wine
#/ https://www.davidbaumgold.com/tutorials/wine-mac/
alias cprs-client='cd ~/.wine/drive_c/Program\ Files/CPRS; wine CPRSChart.exe'
#/ Win VM: Install Win10 in Virtualbox from ISO and label "Win10-CPRS"
#/ https://www.microsoft.com/en-us/software-download/windows10ISO
alias cprs-vm='VBoxManage startvm "Win10-CPRS"'
#/ For both Windows methods, follow CPRS installation instructions
#/ http://vistadataproject.info/demo/#cprs--rpc-server-installation
```



## NodeVISTA VM: Utility functions

``` sh
# Guest VM services
sudo apt-get install figlet shellinabox

```


