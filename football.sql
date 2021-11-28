CREATE TABLE TypeOfTournament (
  type_of_tournament_id INTEGER NOT NULL PRIMARY KEY,
  type_of_tournament TEXT
);

CREATE TABLE Tournament (
  tournament_name_id INTEGER NOT NULL PRIMARY KEY,
  tournament_name TEXT,
  nation TEXT,
  type_of_tournament_id INTEGER NOT NULL,
  FOREIGN KEY(type_of_tournament_id) REFERENCES typeOfTournament(type_of_tournament_id)
);

CREATE TABLE TypeOfTeam (
  type_of_team_id INTEGER NOT NULL PRIMARY KEY,
  type_of_team TEXT
);

CREATE TABLE Team (
  team_id INTEGER NOT NULL PRIMARY KEY, 
  name TEXT, 
  type_of_team_id INTEGER NOT NULL,
  tournament_name_id INTEGER NOT NULL,
  FOREIGN KEY(tournament_name_id) REFERENCES Tournament(tournament_name_id),
  FOREIGN KEY(type_of_team_id) REFERENCES TypeOfTeam(type_of_team_id)
);

CREATE TABLE Player (
  player_id INTEGER, 
  name TEXT, 
  last_name TEXT, 
  team_id INTEGER,
  FOREIGN KEY(team_id) REFERENCES Team(team_id)
);
CREATE TABLE Coach (
  coach_id INTEGER,
  name TEXT,
  last_name TEXT,
  team_id INTEGER,
  FOREIGN KEY(team_id) REFERENCES Team(team_id)
);

-- create
INSERT INTO TypeOfTournament(type_of_tournament) VALUES
('djskfljsl'),
('continental'),
('national' ),
('toBeDeleted');

-- read all
SELECT * FROM TypeOfTournament;

-- update
UPDATE TypeOfTournament SET
type_of_tournament = 'world'
WHERE type_of_tournament_id = 1;

-- read all
SELECT * FROM TypeOfTournament;

-- delete
DELETE FROM TypeOfTournament
WHERE type_of_tournament_id = 4;

-- read all
SELECT * FROM TypeOfTournament;

INSERT INTO Tournament(tournament_name, nation, type_of_tournament_id) VALUES
('World Cup', 'Catar', 1),
('Euros', 'France', 2),
('UK Championships', 'UK', 3),
('Copa America', 'Mexico', 2),
('Olympics', 'Japan', 1);

SELECT * FROM Tournament;

INSERT INTO TypeOfTeam(type_of_team) VALUES
('First level'),
('Second level'),
('Third level');

SELECT * FROM TypeOfTeam;

INSERT INTO Team(name, type_of_team_id, tournament_name_id) VALUES
('Celtics', 2, 3),
('Rangers', 3, 3),
('Brazil', 1, 1),
('England', 2, 1),
('Scotland', 3, 2),
('France', 1, 2),
('Argentina', 2, 4),
('Portugal', 1, 5);

SELECT * FROM Team;

INSERT INTO Player(name, last_name, team_id) VALUES
('Cristiano', 'Ronaldo', 8),
('Lionel', 'Messi', 7),
('Kylian', 'Mbappe', 6),
('Andy', 'Robertson', 5),
('notCristiano', 'notRonaldo', 4),
('notLionel', 'notMessi', 3),
('notKylian', 'notMbappe', 2),
('notAndy', 'notRobertson', 1);

SELECT * FROM Player;

INSERT INTO Coach(name, last_name, team_id) VALUES
('Coach2', 'Surname2', 2),
('Coach5', 'Surname5', 5),
('Coach7', 'Surname7', 7),
('Coach3', 'Surname3', 3),
('Coach8', 'Surname8', 8),
('Coach1', 'Surname1', 1),
('Coach4', 'Surname4', 4),
('Coach6', 'Surname6', 6);


 
-- We can do something like this:
SELECT Team.name FROM Coach
JOIN Team ON Coach.team_id = Team.team_id
WHERE Coach.last_name = 'Surname3';