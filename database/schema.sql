drop database if exists letsrec;

create database letsrec;

use letsrec;

create table accounts (
  id int not null primary key auto_increment,
  username varchar(60) not null,
  password varchar(60) not null,
  email varchar(60) not null,
  location varchar(200) not null
);

create table sports (
  id int not null primary key auto_increment,
  sport varchar(60) not null
);

create table sportsaccounts (
  id int not null primary key auto_increment,
  account_id int not null,
  sport_id int not null
);

create table teams (
  id int not null primary key auto_increment,
  name varchar(60),
  sport_id int not null
);

create table teamsaccounts (
  id int not null primary key auto_increment,
  account_id int not null,
  team_id int not null
);

create index accountfk on sportsaccounts(account_id);
create index sportfk on sportsaccounts(sport_id);
create index accountfk on teamsaccounts(account_id);
create index teamfk on teamsaccounts(team_id);
create index sportfk on teams(sport_id);

insert into sports (sport) values ("basketball");
insert into sports (sport) values ("volleyball");
insert into sports (sport) values ("soccer");
insert into sports (sport) values ("flag football");
insert into sports (sport) values ("baseball");
insert into sports (sport) values ("basketball");
insert into sports (sport) values ("softball");
