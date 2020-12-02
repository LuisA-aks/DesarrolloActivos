using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    //Prestamos
    public class Tabla5AS
    {
         // public string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT2021;Integrated Security=True";
        //public string connString = "Data Source=DESKTOP-8CV6UC2;Initial Catalog=DT3335;Integrated Security=True";

        public List<Tabla5A> mostrarxfecha5(string fecha, string conexionF)
        {
            List<Tabla5A> pro = new List<Tabla5A>();

            

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_PrestamosFecha @fecha ";
                    mycmd.Parameters.Add("@fecha", SqlDbType.VarChar, 150).Value = fecha;

                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Tabla5A p = new Tabla5A()
                        {
                            fecha = rdr["fechaActual"].ToString(),
                            boleta = rdr["id_boleta"].ToString(),
                            destino = rdr["nombre_Oficina"].ToString(),
                            activoplaca = rdr["placa_Activo"].ToString(),
                            funcionario = rdr["plaza_Funcionario"].ToString(),
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

        public List<Tabla5A> mostrarxactivo5(string activo, string conexionF)
        {
           
            List<Tabla5A> pro = new List<Tabla5A>();
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_Prestamos @numboleta ";
                    mycmd.Parameters.Add("@numboleta", SqlDbType.VarChar, 150).Value = activo;

                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        
                        Tabla5A p = new Tabla5A()
                        {
                            fecha = rdr["fechaActual"].ToString(),
                            boleta = rdr["id_boleta"].ToString(),
                            destino = rdr["nombre_Oficina"].ToString(),
                            activoplaca = rdr["placa_Activo"].ToString(),
                            funcionario = rdr["plaza_Funcionario"].ToString(),
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

        public List<Tabla5A> mostrartodo(string conexionF)
        {
            List<Tabla5A> pro = new List<Tabla5A>();
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_CargaTodoslosPrestamos";
                   

                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {

                        Tabla5A p = new Tabla5A()
                        {
                            fecha = rdr["fechaActual"].ToString(),
                            boleta = rdr["id_boleta"].ToString(),
                            destino = rdr["nombre_Oficina"].ToString(),
                            activoplaca = rdr["placa_Activo"].ToString(),
                            funcionario = rdr["plaza_Funcionario"].ToString(),
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