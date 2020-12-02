using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class Proveedores
    {
        //public string connString = "Data Source=DESKTOP-8CV6UC2;Initial Catalog=DT4333;Integrated Security=True";
        //public string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT2021;Integrated Security=True";

        public string agregar_proveedor(string nombreproveedor, string telefonoproveedor, string correoproveedor, string direccionproveedor, string observacionesproveedor, string conexionF)
        {
            string mensaje = "";

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try { 
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute Sp_IngresarProveedor @nombreproveedor, @telefonoproveedor, @correoproveedor, @direccionproveedor, @observacionesproveedor";
                mycmd.Parameters.Add("@nombreproveedor", SqlDbType.VarChar, 150).Value = nombreproveedor;
                mycmd.Parameters.Add("@telefonoproveedor", SqlDbType.VarChar, 150).Value = telefonoproveedor;
                mycmd.Parameters.Add("@correoproveedor", SqlDbType.VarChar, 150).Value = correoproveedor;
                mycmd.Parameters.Add("@direccionproveedor", SqlDbType.VarChar, 150).Value = direccionproveedor;
                mycmd.Parameters.Add("@observacionesproveedor", SqlDbType.VarChar, 150).Value = observacionesproveedor;
                SqlDataReader rdr = mycmd.ExecuteReader();

                while (rdr.Read())
                {
                    mensaje = rdr["Mensaje"].ToString();
                    //reto codigo
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
            return mensaje;
        }

        public List<Proveedor> mostrarproveedor(string conexionF)
        {
            List<Proveedor> pro = new List<Proveedor>();
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try { 
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute selectproveedores";

                SqlDataReader rdr = mycmd.ExecuteReader();
                while (rdr.Read())
                {

                    Proveedor p = new Proveedor()
                    {
                        id_Proveedor = Convert.ToInt16(rdr["id_Proveedor"]),
                        nombre_Proveedor = rdr["nombre_Proveedor"].ToString()

                    };
                    pro.Add(p);
                    //reto codigo
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