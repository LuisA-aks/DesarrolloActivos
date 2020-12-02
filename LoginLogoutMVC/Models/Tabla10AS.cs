using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class Tabla10AS
    {
        public List<Tabla10A> mostrartodo(string conexionF)
        {
            List<Tabla10A> pro = new List<Tabla10A>();

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_CargaProveedor";


                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {

                        Tabla10A t = new Tabla10A()
                        {
                            id_Proveedor = rdr["id_Proveedor"].ToString(),
                            nombre_Proveedor = rdr["nombre_Proveedor"].ToString(),
                            telefono_Proveedor = rdr["telefono_Proveedor"].ToString(),
                            correo_Proveedor = rdr["correo_Proveedor"].ToString(),
                            observaciones_Proveedor = rdr["observaciones_Proveedor"].ToString(),


                        };
                        pro.Add(t);
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

        public List<Tabla10A> mostrarxnombre(string conexionF, string nombre)
        {
            List<Tabla10A> pro = new List<Tabla10A>();

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_CargaProveedorporNombre @nombre";
                    mycmd.Parameters.Add("@nombre", SqlDbType.VarChar, 150).Value = nombre;

                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {

                        Tabla10A t = new Tabla10A()
                        {
                            id_Proveedor = rdr["id_Proveedor"].ToString(),
                            nombre_Proveedor = rdr["nombre_Proveedor"].ToString(),
                            telefono_Proveedor = rdr["telefono_Proveedor"].ToString(),
                            correo_Proveedor = rdr["correo_Proveedor"].ToString(),
                            observaciones_Proveedor = rdr["observaciones_Proveedor"].ToString(),


                        };
                        pro.Add(t);
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