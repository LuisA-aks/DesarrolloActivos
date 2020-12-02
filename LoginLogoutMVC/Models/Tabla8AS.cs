using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class Tabla8AS
    {
        public List<CMMarca> dametodo(string conexion)
        {
            List<CMMarca> pro = new List<CMMarca>();

            using (SqlConnection myConn = new SqlConnection(conexion))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_CargaMMarca";
                   
                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        CMMarca marca = new CMMarca()
                        {
                            Id_Marca= rdr["id_Marca"].ToString(),
                            nombre_Marca= rdr["nombre_Marca"].ToString(),
                            nombre_Modelo= rdr["nombre_Modelo"].ToString(),
                            nombre_Familia = rdr["nombre_Familia"].ToString()
                        };
                        pro.Add(marca);
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

        public List<CMMarca> damexnombre(string nombre, string conexionF)
        {
            List<CMMarca> pro = new List<CMMarca>();

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_CargaMMarcaPorNombreMarca @nombremarca";
                    mycmd.Parameters.Add("@nombremarca", SqlDbType.VarChar, 150).Value = nombre;

                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        CMMarca marca = new CMMarca()
                        {
                            Id_Marca = rdr["id_Marca"].ToString(),
                            nombre_Marca = rdr["nombre_Marca"].ToString(),
                            nombre_Modelo = rdr["nombre_Modelo"].ToString(),
                            nombre_Familia = rdr["nombre_Familia"].ToString()
                        };
                        pro.Add(marca);
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

        public List<CMMarca> damexfamilia(string id, string conexionF)
        {
            List<CMMarca> pro = new List<CMMarca>();

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_CargaMMarcaPorFamilia @idfamilia";
                    mycmd.Parameters.Add("@idfamilia", SqlDbType.Int, 150).Value = id;

                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        CMMarca marca = new CMMarca()
                        {
                            Id_Marca = rdr["id_Marca"].ToString(),
                            nombre_Marca = rdr["nombre_Marca"].ToString(),
                            nombre_Modelo = rdr["nombre_Modelo"].ToString(),
                            nombre_Familia = rdr["nombre_Familia"].ToString()
                        };
                        pro.Add(marca);
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