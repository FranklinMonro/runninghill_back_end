--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3 (Debian 15.3-1.pgdg120+1)
-- Dumped by pg_dump version 15.3

-- Started on 2023-06-25 10:49:28 UTC

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3355 (class 1262 OID 5)
-- Name: postgres; Type: DATABASE; Schema: -; Owner: postgres
--

-- CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


-- ALTER DATABASE postgres OWNER TO postgres;

\connect postgres

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3356 (class 0 OID 0)
-- Dependencies: 3355
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 16395)
-- Name: sentences; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sentences (
    "senteceID" uuid NOT NULL,
    sentence character varying,
    active boolean
);


ALTER TABLE public.sentences OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16388)
-- Name: wordtypes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.wordtypes (
    "typeID" uuid NOT NULL,
    "wordType" character varying
);


ALTER TABLE public.wordtypes OWNER TO postgres;

--
-- TOC entry 3349 (class 0 OID 16395)
-- Dependencies: 215
-- Data for Name: sentences; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3348 (class 0 OID 16388)
-- Dependencies: 214
-- Data for Name: wordtypes; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.wordtypes ("typeID", "wordType") VALUES ('27b2617a-07f4-43dc-abf0-8ba2b907e6ea', 'noun');
INSERT INTO public.wordtypes ("typeID", "wordType") VALUES ('a5d6e194-9437-45d6-9169-50dbee7282c4', 'Verb');
INSERT INTO public.wordtypes ("typeID", "wordType") VALUES ('2718448b-4a9a-4f79-b644-351ce072745f', 'Adjective');
INSERT INTO public.wordtypes ("typeID", "wordType") VALUES ('48f3b4de-6abe-440f-8a47-96c1f26a94da', 'Adverb');
INSERT INTO public.wordtypes ("typeID", "wordType") VALUES ('cd6abc76-4431-43ad-91b1-bc55e8391b74', 'Pronoun');
INSERT INTO public.wordtypes ("typeID", "wordType") VALUES ('58d822c1-2307-495c-be72-f2e3152258b7', 'Preposition');
INSERT INTO public.wordtypes ("typeID", "wordType") VALUES ('7ba6f92f-b364-48c1-9f13-6477ea18f022', 'Conjunction');
INSERT INTO public.wordtypes ("typeID", "wordType") VALUES ('43d65180-2877-450f-89d1-bff9eaa87814', 'Determiner');
INSERT INTO public.wordtypes ("typeID", "wordType") VALUES ('ad8a6602-af63-4c9b-995b-0792e5c60142', 'Exclamation');


-- Completed on 2023-06-25 10:49:28 UTC

--
-- PostgreSQL database dump complete
--

