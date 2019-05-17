CREATE DATABASE ng_hosts_db
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Chile.1252'
    LC_CTYPE = 'Spanish_Chile.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;


CREATE TABLE public.ng_hosts
(
    "Id" integer NOT NULL,
    "Pais" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "Grupo" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "Host" character varying(50) COLLATE pg_catalog."default",
    "Servicio" character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT ng_hosts_pkey PRIMARY KEY ("Id")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

insert into ng_hosts values(1,'Chile','RE_REGULARIZACION','tobads01','LOG SECURITY');
insert into ng_hosts values(2,'Chile','CL_SIEBEL_LOY','g500603svcn8','SCRIPT-SIEBELENTERPRICE');
insert into ng_hosts values(3,'Colombia','CO_DOMAIN','cosv0000068','LOG DIRECTORY');
insert into ng_hosts values(4,'Argentina','AR_TS','g100603svts16','LOG SECURITY');
insert into ng_hosts values(5,'Argentina','AR_AUDIT','g100603sv58h','LOGSYSTEM');
insert into ng_hosts values(6,'Argentina','AR_ICF_PROVIDER','g100603sv335','LOGSYESTEM');
insert into ng_hosts values(7,'Chile','AR_RPA','g100603svgpk','MSSSQLSERVER');
insert into ng_hosts values(8,'Chile','CL_PROYECTO','g100603svhch','POSTGREST');
insert into ng_hosts values(9,'Argentina','BIZTALK','g100603sv232','HTTP CENCOSUD');
insert into ng_hosts values(10,'Argentina','AR_DHCP','g100603sv56a','INTERFACE 2');
insert into ng_hosts values(11,'Chile','CL_MANHATAN','g100603svfyl','G500603SVFYL');
insert into ng_hosts values(12,'Argentina','RE_REGULARIZACION','g100603sv32k','LOG SYSTEM');
insert into ng_hosts values(13,'Argentina','AR_TS','g100603svtsb','LOG APLICATION');
insert into ng_hosts values(14,'Chile','CL_ADFS','g100603sv0yx','LOG APLICATION');
insert into ng_hosts values(15,'Chile','CL_FLEJES','g100603sv832','LOG SYMANTEC');
insert into ng_hosts values(16,'Argentina','AR_TS','g100603svtsh','CPU UTILIZATION');
insert into ng_hosts values(17,'Chile','RE_REGULARIZACION','iquadds02','MEMORY AND PAGEFILE');
insert into ng_hosts values(18,'Colombia','CO_GENECIZ','osiris','PROCESS P_CTM');
insert into ng_hosts values(19,'Chile','CL_NEGOCIO','sv77p1co01r','MEMORY AND PAGEFILE');
insert into ng_hosts values(20,'Brasil','BR_PORTAL_NO','sqlserver00','MSSSQL SERVER DB');
insert into ng_hosts values(21,'Chile','BR_PORTAL_NO','curads01','LOG SYMATEC');
insert into ng_hosts values(22,'Argentina','RE_REGULARIZACION','g100603svbhf','PING');
insert into ng_hosts values(23,'Chile','AR_TS','jquadds01','LOG SECURITY');
insert into ng_hosts values(24,'Argentina','RE_REGULARIZACION','g100603sv10o','LOG SYMANTEC');
insert into ng_hosts values(25,'Chile','RE_REGULARIZACION','g500603svgcc','LOG SYMANTEC');
