## nodeVISTA - optional installs

See nodeVISTA demo for instructions on creating your own local nodeVISTA server.

These are post-installation tweaks that make using the nodeVISTA server and services easier.


Create new file "nv.sh" in user's root directory  on host (i.e. in  ~/nv.sh)
Note: Install figlet (Mac: brew install figlet; Linux: apt-get install figlet)
``` sh
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


Append to  ".profile" in user's root directory on host (i.e.  ~/.profile )
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

