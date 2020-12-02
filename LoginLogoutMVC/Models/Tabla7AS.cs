using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class Tabla7AS
    {
       //  public string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT2021;Integrated Security=True";
        //public string connString = "Data Source=DESKTOP-8CV6UC2;Initial Catalog=DT3335;Integrated Security=True";

        public List<Tabla7A> mostrarxfecha(string fecha, string conexionF)
        {
            List<Tabla7A> pro = new List<Tabla7A>();

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try { 
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_CargaAsignaActivosfecha @fecha ";
                mycmd.Parameters.Add("@fecha", SqlDbType.VarChar, 150).Value = fecha;

                SqlDataReader rdr = mycmd.ExecuteReader();
                while (rdr.Read())
                {
                    Tabla7A pc = new Tabla7A()
                    {
                        fecha_asignacion = rdr["fecha_AsignaActivos"].ToString(),
                        descripcion = rdr["descripcion"].ToString(),
                        placa = rdr["placa_Activo"].ToString(),
                        plaza_Funcionario = rdr["plaza_Funcionario"].ToString(),
                        nombre_Funcionario = rdr["nombre_Funcionario"].ToString(),
                        apellido_Funcionario = rdr["apellido_Funcionario"].ToString(),
                        nombre_Usuario = rdr["nombre_Usuario"].ToString(),

                    };
                    pro.Add(pc);
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

        public List<Tabla7A> mostrarxplaca(string placa, string conexionF)
        {
            List<Tabla7A> pro = new List<Tabla7A>();

           
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try { 
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_CargaAsignaActivosplaca @placa ";
                mycmd.Parameters.Add("@placa", SqlDbType.VarChar, 150).Value = placa;

                SqlDataReader rdr = mycmd.ExecuteReader();
                while (rdr.Read())
                {
                    Tabla7A pc = new Tabla7A()
                    {
                        fecha_asignacion = rdr["fecha_AsignaActivos"].ToString(),
                        descripcion = rdr["descripcion"].ToString(),
                        placa = rdr["placa_Activo"].ToString(),
                        plaza_Funcionario = rdr["plaza_Funcionario"].ToString(),
                        nombre_Funcionario = rdr["nombre_Funcionario"].ToString(),
                        apellido_Funcionario = rdr["apellido_Funcionario"].ToString(),
                        nombre_Usuario = rdr["nombre_Usuario"].ToString(),

                    };
                    pro.Add(pc);
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

        public List<Tabla7A> mostrarxplaza(string plaza, string conexionF)
        {
            List<Tabla7A> pro = new List<Tabla7A>();

           
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try { 
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_CargaAsignaActivosplaza @plaza ";
                mycmd.Parameters.Add("@plaza", SqlDbType.VarChar, 150).Value = plaza;

                SqlDataReader rdr = mycmd.ExecuteReader();
                while (rdr.Read())
                {
                    Tabla7A pc = new Tabla7A()
                    {
                        fecha_asignacion = rdr["fecha_AsignaActivos"].ToString(),
                        descripcion = rdr["descripcion"].ToString(),
                        placa = rdr["placa_Activo"].ToString(),
                        plaza_Funcionario = rdr["plaza_Funcionario"].ToString(),
                        nombre_Funcionario = rdr["nombre_Funcionario"].ToString(),
                        apellido_Funcionario = rdr["apellido_Funcionario"].ToString(),
                        nombre_Usuario = rdr["nombre_Usuario"].ToString(),

                    };
                    pro.Add(pc);
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

        public List<Tabla7A> mostrartodo(string conexionF)
        {
            List<Tabla7A> pro = new List<Tabla7A>();


            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try { 
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_CargaAsignaActivostodos";
               

                SqlDataReader rdr = mycmd.ExecuteReader();
                while (rdr.Read())
                {
                    Tabla7A pc = new Tabla7A()
                    {
                        fecha_asignacion = rdr["fecha_AsignaActivos"].ToString(),
                        descripcion = rdr["descripcion"].ToString(),
                        placa = rdr["placa_Activo"].ToString(),
                        plaza_Funcionario = rdr["plaza_Funcionario"].ToString(),
                        nombre_Funcionario = rdr["nombre_Funcionario"].ToString(),
                        apellido_Funcionario = rdr["apellido_Funcionario"].ToString(),
                        nombre_Usuario = rdr["nombre_Usuario"].ToString(),

                    };
                    pro.Add(pc);
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