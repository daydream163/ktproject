﻿using System;
using System.Linq;
using System.Text;

namespace KTProject.Model
{
    ///<summary>
    ///
    ///</summary>
    public partial class flow_swimlaneinstance
    {
           public flow_swimlaneinstance(){


           }
           /// <summary>
           /// Desc:
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string NAME_ {get;set;}

           /// <summary>
           /// Desc:
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string ACTORID_ {get;set;}

           /// <summary>
           /// Desc:
           /// Default:
           /// Nullable:True
           /// </summary>           
           public long? SWIMLANE_ {get;set;}

           /// <summary>
           /// Desc:
           /// Default:
           /// Nullable:True
           /// </summary>           
           public long? TASKMGMTINSTANCE_ {get;set;}

           /// <summary>
           /// Desc:
           /// Default:
           /// Nullable:False
           /// </summary>           
           public long ID_ {get;set;}

           /// <summary>
           /// Desc:
           /// Default:
           /// Nullable:False
           /// </summary>           
           public int VERSION_ {get;set;}

    }
}
