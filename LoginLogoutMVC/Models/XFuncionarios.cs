using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    
    public class XFuncionarios
    {
        
             public List<Funcionario> mostrar_Funcionarios(int region, string conexionF)
        {
            List<Funcionario> l = new List<Funcionario>();
          //  string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT2021;Integrated Security=True";
            //string connString = "Data Source=DESKTOP-8CV6UC2;Initial Catalog=DT4333;Integrated Security=True";
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try { 
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_DameFuncionarios @Region";
                mycmd.Parameters.Add("@Region", SqlDbType.Int, 150).Value = region;

                SqlDataReader rdr = mycmd.ExecuteReader();
                while (rdr.Read())
                {
                    Funcionario f = new Funcionario()
                    {
                        id_Funcionario = rdr["id_Funcionario"].ToString(),
                        nombre_Funcionario = rdr["nombre_Funcionario"].ToString()
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

            }



            return l;

        }
    }
}