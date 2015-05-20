#! /usr/bin/env bash

source /vagrant/provision/constants.sh
source /vagrant/provision/utils.sh

echo_heading "Update and install packages"
{
  sudo apt-get update -qq
  sudo apt-get -y install curl git
} > /dev/null

echo_heading "Idempotently add stuff to .profile"
# If not already there, then append command to execute .profile_additions to .profile
if ! grep -q ".profile_additions" $VAGRANT_HOME/.profile; then
  echo "source $PROVISION_DIR/.profile_additions" >> $VAGRANT_HOME/.profile
fi

if ! program_is_installed node ; then
  echo_heading "Install Node.js  "
  {
    curl -sL https://deb.nodesource.com/setup | sudo bash
    sudo apt-get -y install nodejs
  } > /dev/null
else
  echo -e "\nNode.js already installed"
fi

if ! program_is_installed rbenv ; then
  echo_heading "Install rbenv"
  {
    curl -sL https://raw.githubusercontent.com/fesplugas/rbenv-installer/master/bin/rbenv-installer | bash
    source $PROJECT_DIR/provision/rbenv_setup.sh
    rbenv bootstrap-ubuntu-12-04
  } > /dev/null
else
  echo -e "\nrbenv already installed"
fi

if [[ "$(ruby -v)" != *"$RUBY_VERSION"* ]] ; then
  echo_heading "Install Ruby v$RUBY_VERSION (using rbenv) and Bundler"
  {
    rbenv install $RBENV_RUBY_VERSION
    rbenv rehash
    rbenv global $RBENV_RUBY_VERSION

    gem install bundler
  } > /dev/null
else
  echo -e "\nRuby v$RUBY_VERSION already installed"
fi

echo_heading "Install Jekyll"
cd $PROJECT_DIR
bundle install > /dev/null

echo -e "\nFinished provisioning"
