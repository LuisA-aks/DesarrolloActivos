using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{

    public class Tabla3AS
    {
       // public string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT2021;Integrated Security=True";
       // public string connString = "Data Source=DESKTOP-8CV6UC2;Initial Catalog=DT3335;Integrated Security=True";

        public List<Tabla3A> mostrarmovimientos(string movimiento, string conexionF)
        {
            List<Tabla3A> pro = new List<Tabla3A>();


            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_CargaMovimientosMovimiento @movimiento ";
                mycmd.Parameters.Add("@movimiento", SqlDbType.VarChar, 150).Value = movimiento;

                SqlDataReader rdr = mycmd.ExecuteReader();
                while (rdr.Read())
                {

                    Tabla3A p = new Tabla3A()
                    {
                        fecha = rdr["fecha_Registro_Movimientos"].ToString(),
                        movimientos = rdr["nombre_Movimientos"].ToString(),
                        usuario = rdr["nombre_Usuario"].ToString(),
                        activo = rdr["descripcion"].ToString(),
                        placaactivo= rdr["placa_Activo"].ToString()
                    };

                    pro.Add(p);

                }
                }
                catch (Exception EX)
                {
                    EX.GetBaseException();
                }
                finally
                {
                    myConn.Close();
                }
            }
            return pro;
        }


        public List<Tabla3A> mostrarxusuario(string usuario, string conexionF)
        {
            List<Tabla3A> pro = new List<Tabla3A>();
           

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try { 
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_CargaMovimientosMovimientouser @user ";
                mycmd.Parameters.Add("@user", SqlDbType.VarChar, 150).Value = usuario;

                SqlDataReader rdr = mycmd.ExecuteReader();
                while (rdr.Read())
                {

                    Tabla3A p = new Tabla3A()
                    {
                        fecha = rdr["fecha_Registro_Movimientos"].ToString(),
                        movimientos = rdr["nombre_Movimientos"].ToString(),
                        usuario = rdr["nombre_Usuario"].ToString(),
                        activo = rdr["descripcion"].ToString(),
                        placaactivo = rdr["placa_Activo"].ToString()
                    };

                    pro.Add(p);

                }
                }
                catch (Exception EX)
                {
                    EX.GetBaseException();
                }
                finally
                {
                    myConn.Close();
                }
            }
            return pro;
        }

        public List<Tabla3A> mostrartodo(string conexionF)
        {
            List<Tabla3A> pro = new List<Tabla3A>();


            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try { 
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_CargaMovimientosTodos";
               

                SqlDataReader rdr = mycmd.ExecuteReader();
                while (rdr.Read())
                {

                    Tabla3A p = new Tabla3A()
                    {
                        fecha = rdr["fecha_Registro_Movimientos"].ToString(),
                        movimientos = rdr["nombre_Movimientos"].ToString(),
                        usuario = rdr["nombre_Usuario"].ToString(),
                        activo = rdr["descripcion"].ToString(),
                        placaactivo = rdr["placa_Activo"].ToString()
                    };

                    pro.Add(p);

                }
                }
                catch (Exception EX)
                {
                    EX.GetBaseException();
                }
                finally
                {
                    myConn.Close();
                }
            }
            return pro;

        }

        public List<Tabla3A> mostrarxplaca(string placa, string conexionF)
        {
            List<Tabla3A> pro = new List<Tabla3A>();
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_CargaMovimientoPorPlaca @placa";
                    mycmd.Parameters.Add("@placa", SqlDbType.VarChar, 150).Value = placa;

                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {

                        Tabla3A p = new Tabla3A()
                        {
                            fecha = rdr["fecha_Registro_Movimientos"].ToString(),
                            movimientos = rdr["nombre_Movimientos"].ToString(),
                            usuario = rdr["nombre_Usuario"].ToString(),
                            activo = rdr["descripcion"].ToString(),
                            placaactivo = rdr["placa_Activo"].ToString()
                        };

                        pro.Add(p);

                    }
                }
                catch (Exception EX)
                {
                    EX.GetBaseException();
                }
                finally
                {
                    myConn.Close();
                }
            }
            return pro;
        }
    }
}