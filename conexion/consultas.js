  const { pool } = require("./conexion")
  const authUser = async(user, pass) => {
      try {
          const res = await pool.query(`select usuario, clave, correo, na, direccion, sector, zona, perfil, pe.id_perfil_pk from tb_usuario as us, tb_socios as so, tb_perfil as pe where usuario='${user}' and clave = '${pass}' and so.id_socios_pk=us.id_socios_pk and pe.id_perfil_pk=so.id_perfil_pk`);
          if (res.rows == 0) {
              return false;
          }
          return res.rows;

      } catch (error) {
          return error.message;
      }
  }

  const getUsuarios = async() => {
      try {
          const res = await pool.query(`select * from tb_usuario`);
          return res.rows;

      } catch (error) {
          return error.message;
      }
  }

  const getMultass = async() => {
      try {
          const res = await pool.query(`select fecha,motivo,monto_multa,na from tb_multa as mu,tb_usuario as us,tb_socios as so where us.id_socios_pk=so.id_socios_pk and mu.id_usuario_pk=us.id_usuario_pk and fecha between '2021-05-10 18:00:00' and '2021-06-10 18:00:00'`);
          return res.rows;

      } catch (error) {
          return error.message;
      }
  }

  const getMultas = async() => {
      try {
          const res = await pool.query(`select fecha,motivo,monto_multa,na from tb_multa as mu,tb_usuario as us,tb_socios as so where us.id_socios_pk=so.id_socios_pk and mu.id_usuario_pk=us.id_usuario_pk`);
          return res.rows;

      } catch (error) {
          return error.message;
      }
  }

  const getbalan = async() => {
      try {
          const res = await pool.query(`select na,tipo,monto_balance from tb_balance as ba,tb_tipo as ti,tb_socios as so where ti.id_tipo_pk=ba.id_tipo_pk and so.id_socios_pk=ba.id_socios_pk`);
          return res.rows;

      } catch (error) {
          return error.message;
      }
  }

  const getbalans = async() => {
      try {
          const res = await pool.query(`select na,tipo,monto_balance from tb_balance as ba,tb_tipo as ti,tb_socios as so where ti.id_tipo_pk=ba.id_tipo_pk and so.id_socios_pk=ba.id_socios_pk and monto_balance='50'`);
          return res.rows;

      } catch (error) {
          return error.message;
      }
  }

  module.exports = {
      authUser,
      getUsuarios,
      getMultass,
      getMultas,
      getbalan,
      getbalans
  }