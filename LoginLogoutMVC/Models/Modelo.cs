using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class Modelo
    {
        // public string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT2021;Integrated Security=True";
        //public string connString = "Data Source=DESKTOP-8CV6UC2;Initial Catalog=DT4333;Integrated Security=True";

        public string agregar_modelo(string nombremodelo, string discoduro, string memoriaram, int idmarcaactivo, int idproveedor, string proc,
             string pulgadas, string tipoimpresora, string resolucion, string descripcion, string conexionF, string _selectmodelofamilia)
        {
            string mensaje = "";

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                //try
                //{
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_IngresaModelo2 @nombremodelo, @tipodisco, @ram, @idmarca, @idproveedor,@procesador,@pulgadas,@tipoimpresora,@resolucion,@descripcion,@idfamilia";
                    mycmd.Parameters.Add("@nombremodelo", SqlDbType.VarChar, 150).Value = nombremodelo;
                    mycmd.Parameters.Add("@tipodisco", SqlDbType.VarChar, 150).Value = discoduro;
                    mycmd.Parameters.Add("@ram", SqlDbType.VarChar, 150).Value = memoriaram;
                    mycmd.Parameters.Add("@idmarca", SqlDbType.Int, 150).Value = idmarcaactivo;
                    mycmd.Parameters.Add("@idproveedor", SqlDbType.Int, 150).Value = idproveedor;
                    mycmd.Parameters.Add("@procesador", SqlDbType.VarChar, 150).Value = proc;
                    mycmd.Parameters.Add("@pulgadas", SqlDbType.VarChar, 150).Value = pulgadas;
                    mycmd.Parameters.Add("@tipoimpresora", SqlDbType.VarChar, 150).Value = tipoimpresora;
                    mycmd.Parameters.Add("@resolucion", SqlDbType.VarChar, 150).Value = resolucion;
                    mycmd.Parameters.Add("@descripcion", SqlDbType.VarChar, 150).Value = descripcion;
                    mycmd.Parameters.Add("@idfamilia", SqlDbType.Int, 150).Value = Convert.ToInt16(_selectmodelofamilia);
                   
                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        mensaje = rdr["Mensaje"].ToString();
                        //reto codigo
                    }
                }
            //catch (Exception EX)
            //{
            //    EX.GetBaseException();
            //}
            //finally
            //{
            //    myConn.Close();
            //}
            return mensaje;
        }

        public string EliminarModelo(string idmodelo, string conexionF)
        {
            string mensaje = "";

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_OcultarModelo @idmodel";
                    mycmd.Parameters.Add("@idmodel", SqlDbType.Int, 150).Value = Convert.ToInt32(idmodelo);

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
                //return mensaje;
            }
            return mensaje;
        }
        //return mensaje;
    }


    }
//}