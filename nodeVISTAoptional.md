# Demo nodeVISTA - Shell scripts
To install the nodeVISTA demo see instructions on the main demo page.   These are *optional* post-installation tweaks that make using the demo nodeVISTA server and services easier on 'nix based computers (MacOS and Linux).  

## Install terminal utility functions
### Macintosh
```
brew install figlet
```
### Linux
``` 
sudo apt-get install figlet
```


## Update shell command scripts

* On host user's root directory, create new file "nv.sh" (i.e. ~/nv.sh) 
* Add the following contents:
``` sh
# nodeVISTA Shell 
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



* In host user's root directory, append the following to the ".profile" file (i.e. in  ~/.profile )
```
#/ nodeVISTA
#/ -------------------------------------------------------------------------------------
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

