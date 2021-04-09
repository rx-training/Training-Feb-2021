CREATE DATABASE TrainingSite;
GO

USE TrainingSite;
GO

CREATE TABLE Courses(
	Cid int CONSTRAINT pk_Cid PRIMARY KEY IDENTITY,
	Cname varchar(30) NOT NULL,
	Ctype varchar(30) CONSTRAINT Chk_Ctype CHECK(Ctype IN('Common','FrontEnd Framework','BackEnd')) NOT NULL
);
GO

CREATE CoursePpts(
	Cid int CONSTRAINT fk_CPCid FOREIGN KEY REFERENCES Courses(Cid),
	Cppt varbinary(MAX) NOT NULL
);
GO

CREATE CourseVideos(
	Cid int CONSTRAINT fk_CVCid FOREIGN KEY REFERENCES Courses(Cid),
	CvideoTopic varchar(50) NOT NULL,
	Cvideo nvarchar(MAX)
);
GO

CREATE TrainingPlans(
	TP_id int CONSTRAINT pk_TP_id PRIMARY KEY IDENTITY,
	TP_name varchar(60) NOT NULL,
	Cid int CONSTRAINT fk_TPCid FOREIGN KEY REFERENCES Courses(Cid)
);
GO

CREATE TABLE TrainingPlanDetails(
	TP_id int CONSTRAINT fk_TPDTP_id FOREIGN KEY REFERENCES TrainingPlans(TP_id),
	TP_day int NOT NULL,
	TP_whatToLearn varchar(MAX),
	TP_practice varchar(MAX),
	TP_assignment varchar(MAX),
	TP_onlineRef varchar(MAX),
	TP_note varchar(MAX),
	TP_practiceImg nvarchar(MAX),
	TP_assignmentImg  nvarchar(MAX)
);
GO

