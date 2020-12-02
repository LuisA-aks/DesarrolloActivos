using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class Tabla2AS
    {
        public string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT2021;Integrated Security=True";
       // public string connString = "Data Source=DESKTOP-8CV6UC2;Initial Catalog=DT3335;Integrated Security=True";
        public List<Tabla2A> mostrarconsulta2AS(string plaza, string conexionF)
        {
            List<Tabla2A> pro = new List<Tabla2A>();


            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_CargaFuncionariosplaza @plaza ";
                    mycmd.Parameters.Add("@plaza", SqlDbType.VarChar, 150).Value = plaza;

                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Tabla2A p = new Tabla2A()
                        {
                            plaza = rdr["plaza_Funcionario"].ToString(),
                            nombre = rdr["nombre_Funcionario"].ToString(),
                            apellido = rdr["apellido_Funcionario"].ToString(),
                            oficina = rdr["nombre_Oficina"].ToString(),
                            correo = rdr["correo_Funcionario"].ToString(),
                            puesto= rdr["Puesto"].ToString(),
                        };

                        pro.Add(p);
                    }

                }
                catch (Exception EX)
                {
                    EX.GetBaseException();
                }
                finally {
                    myConn.Close();
                }
            }
            return pro;
        }

        public List<Tabla2A> mostrarconsulta2ASoficina(string oficina, string conexionF)
        {
            List<Tabla2A> pro = new List<Tabla2A>();
            

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_CargaFuncionariosoficina @oficina ";
                    mycmd.Parameters.Add("@oficina", SqlDbType.VarChar, 150).Value = oficina;

                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Tabla2A p = new Tabla2A()
                        {
                            plaza = rdr["plaza_Funcionario"].ToString(),
                            nombre = rdr["nombre_Funcionario"].ToString(),
                            apellido = rdr["apellido_Funcionario"].ToString(),
                            oficina = rdr["nombre_Oficina"].ToString(),
                            correo = rdr["correo_Funcionario"].ToString(),
                            puesto= rdr["Puesto"].ToString(),
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
                return pro;
            }
        }

        public List<Tabla2A> mostrartodo(string conexionF)
        {
            List<Tabla2A> pro = new List<Tabla2A>();


            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute  SP_CargaFuncionariosTodos";
                   

                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Tabla2A p = new Tabla2A()
                        {
                            plaza = rdr["plaza_Funcionario"].ToString(),
                            nombre = rdr["nombre_Funcionario"].ToString(),
                            apellido = rdr["apellido_Funcionario"].ToString(),
                            oficina = rdr["nombre_Oficina"].ToString(),
                            correo = rdr["correo_Funcionario"].ToString(),
                            puesto= rdr["Puesto"].ToString(),
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
                return pro;
            }
        }

    }
}