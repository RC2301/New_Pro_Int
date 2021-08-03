
CREATE SEQUENCE public.tb_tipo_id_tipo_pk_seq;

CREATE TABLE public.tb_tipo (
                id_tipo_pk BIGINT NOT NULL DEFAULT nextval('public.tb_tipo_id_tipo_pk_seq'),
                tipo VARCHAR(100) NOT NULL,
                CONSTRAINT id_tipo_pk PRIMARY KEY (id_tipo_pk)
);


ALTER SEQUENCE public.tb_tipo_id_tipo_pk_seq OWNED BY public.tb_tipo.id_tipo_pk;

CREATE SEQUENCE public.tb_perfil_id_perfil_pk_seq;

CREATE TABLE public.tb_perfil (
                id_perfil_pk BIGINT NOT NULL DEFAULT nextval('public.tb_perfil_id_perfil_pk_seq'),
                perfil VARCHAR(100) NOT NULL,
                CONSTRAINT id_perfil_pk PRIMARY KEY (id_perfil_pk)
);


ALTER SEQUENCE public.tb_perfil_id_perfil_pk_seq OWNED BY public.tb_perfil.id_perfil_pk;

CREATE SEQUENCE public.tb_socios_id_socios_pk_seq;

CREATE TABLE public.tb_socios (
                id_socios_pk BIGINT NOT NULL DEFAULT nextval('public.tb_socios_id_socios_pk_seq'),
                na VARCHAR(100) NOT NULL,
                direccion VARCHAR(100) NOT NULL,
                sector VARCHAR(100) NOT NULL,
                zona VARCHAR(100) NOT NULL,
                id_perfil_pk BIGINT NOT NULL,
                CONSTRAINT id_socios_pk PRIMARY KEY (id_socios_pk)
);


ALTER SEQUENCE public.tb_socios_id_socios_pk_seq OWNED BY public.tb_socios.id_socios_pk;

CREATE SEQUENCE public.tb_balance_id_balance_pk_seq;

CREATE TABLE public.tb_balance (
                id_balance_pk BIGINT NOT NULL DEFAULT nextval('public.tb_balance_id_balance_pk_seq'),
                id_tipo_pk BIGINT NOT NULL,
                monto_balance VARCHAR(100) NOT NULL,
                id_socios_pk BIGINT NOT NULL,
                CONSTRAINT id_balance_pk PRIMARY KEY (id_balance_pk)
);


ALTER SEQUENCE public.tb_balance_id_balance_pk_seq OWNED BY public.tb_balance.id_balance_pk;

CREATE SEQUENCE public.tb_usuario_id_usuario_pk_seq;

CREATE TABLE public.tb_usuario (
                id_usuario_pk BIGINT NOT NULL DEFAULT nextval('public.tb_usuario_id_usuario_pk_seq'),
                usuario VARCHAR(100) NOT NULL,
                clave VARCHAR(100) NOT NULL,
                correo VARCHAR(100) NOT NULL,
                id_socios_pk BIGINT NOT NULL,
                CONSTRAINT id_usuario_pk PRIMARY KEY (id_usuario_pk)
);


ALTER SEQUENCE public.tb_usuario_id_usuario_pk_seq OWNED BY public.tb_usuario.id_usuario_pk;

CREATE SEQUENCE public.tb_multa_id_multa_pk_seq;

CREATE TABLE public.tb_multa (
                id_multa_pk BIGINT NOT NULL DEFAULT nextval('public.tb_multa_id_multa_pk_seq'),
                fecha TIMESTAMP NOT NULL,
                motivo VARCHAR(100) NOT NULL,
                monto_multa VARCHAR NOT NULL,
                id_usuario_pk BIGINT NOT NULL,
                CONSTRAINT id_multa_pk PRIMARY KEY (id_multa_pk)
);


ALTER SEQUENCE public.tb_multa_id_multa_pk_seq OWNED BY public.tb_multa.id_multa_pk;

ALTER TABLE public.tb_balance ADD CONSTRAINT tb_tipo_tb_balance_fk
FOREIGN KEY (id_tipo_pk)
REFERENCES public.tb_tipo (id_tipo_pk)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.tb_socios ADD CONSTRAINT tb_perfil_tb_socios_fk
FOREIGN KEY (id_perfil_pk)
REFERENCES public.tb_perfil (id_perfil_pk)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.tb_usuario ADD CONSTRAINT tb_socios_tb_usuario_fk
FOREIGN KEY (id_socios_pk)
REFERENCES public.tb_socios (id_socios_pk)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.tb_balance ADD CONSTRAINT tb_socios_tb_balance_fk
FOREIGN KEY (id_socios_pk)
REFERENCES public.tb_socios (id_socios_pk)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.tb_multa ADD CONSTRAINT tb_usuario_tb_multa_fk
FOREIGN KEY (id_usuario_pk)
REFERENCES public.tb_usuario (id_usuario_pk)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;
