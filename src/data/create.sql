CREATE TABLE vuelo (
	id SERIAL PRIMARY KEY,
	origin varchar(100) NOT NULL,
	destination varchar(100) NOT NULL,
	trip_type varchar(2) NOT NULL,
	departure timestamp NOT NULL,
	arrival timestamp NOT NULL,
	price decimal NOT NULL,
	duration interval NOT NULL,
	free_seats int NOT NULL
);

ALTER TABLE vuelo
	ADD CONSTRAINT check_trip_type
	CHECK(trip_type = 'RT' OR trip_type = 'OW');