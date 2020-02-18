

- Platform as a Service (Paas)
  - Google App Engine
  - AWS Elastic Beanstalk
  - We give Google our Code
  - Expensive
- Infrastructure as a Service (Iaas)
  - Google Compute Engine
  - Amazon EC2
  - We rent virtual computing space from Google / Amazon







```
# For Ubuntu 16.04 (g1-small)

# Install Ruby
sudo apt-get install gnupg2

gpg2 --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB

\curl -sSL https://get.rvm.io | bash -s stable

# Close the Terminal and Reopen it
rvm install ruby-2.6.1
rvm use 2.6.1

# Install Bundler
gem install bundler

# Install Node.js
curl -sSL https://deb.nodesource.com/gpgkey/nodesource.gpg.key | sudo apt-key add -
VERSION=node_8.x
DISTRO="$(lsb_release -s -c)"
echo "deb https://deb.nodesource.com/$VERSION $DISTRO main" | sudo tee /etc/apt/sources.list.d/nodesource.list
echo "deb-src https://deb.nodesource.com/$VERSION $DISTRO main" | sudo tee -a /etc/apt/sources.list.d/nodesource.list
sudo apt-get update
sudo apt-get install nodejs

```

