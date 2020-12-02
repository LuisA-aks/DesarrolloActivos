using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class XActivos
    {
        public List<XActivo> mostrar_stock(string conexionF)
        {
            List<XActivo> l = new List<XActivo>();
          //  string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT2021;Integrated Security=True";
            //string connString = "Data Source=DESKTOP-8CV6UC2;Initial Catalog=DT4333;Integrated Security=True";
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try { 
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_DameStock";
                

                SqlDataReader rdr = mycmd.ExecuteReader();
                while (rdr.Read())
                {
                    XActivo f = new XActivo()
                    {
                        id_Activo = rdr["id_Activo"].ToString(),
                        placa_Activo = rdr["placa_Activo"].ToString()
                    };
                    l.Add(f);
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
                return l;
            }
        }

        public List<XActivo> mostrar_xActivos(string familia, string conexionF)
        {
            List<XActivo> l = new List<XActivo>();
            //string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT2021;Integrated Security=True";
            //string connString = "Data Source=DESKTOP-8CV6UC2;Initial Catalog=DT4333;Integrated Security=True";
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try { 
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_FiltraActivoFamilia @idfamilia";
                mycmd.Parameters.Add("@idfamilia", SqlDbType.Int, 150).Value = Convert.ToInt16(familia);


                SqlDataReader rdr = mycmd.ExecuteReader();
                while (rdr.Read())
                {
                    XActivo f = new XActivo()
                    {
                        id_Activo = rdr["id_Activo"].ToString(),
                        placa_Activo = rdr["placa_Activo"].ToString()
                    };
                    l.Add(f);
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
                return l;
            }
        }
    }
}