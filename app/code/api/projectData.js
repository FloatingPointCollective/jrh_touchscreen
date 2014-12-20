angular.module("projectData", []).service('projectData', function(){

  this.getProject = function(id){
    return this.getAll().filter(function(project){
      return project.id == id;
    })[0];
  };

  this.getBugs = function(projectId){
    var project = this.getProject(projectId);
    return project.bugs;
  };

  this.getBug = function(projectId, bugId){
    var project = this.getProject(projectId);
    var bug = project.bugs.filter(function(bug){
      return bug.id == bugId;
    });
    return bug[0];
  };

  this.getAll = function(){
    return [
      {
        id: "p1",
        name: "Project 1",
        bugs: [
          { id: "b01", name: "Bug 1", status: "Open",        priority: "High"    },
          { id: "b02", name: "Bug 2", status: "Resolved",    priority: "High"    },
          { id: "b03", name: "Bug 3", status: "Open",        priority: "Normal"  },
          { id: "b04", name: "Bug 4", status: "In Progress", priority: "Normal"  },
          { id: "b05", name: "Bug 5", status: "In Progress", priority: "Low"     }
        ]
      },
      {
        id: "p2",
        name: "Project 2",
        bugs: [
          { id: "b11", name: "Bug 1", status: "Open",        priority: "High"    },
          { id: "b12", name: "Bug 2", status: "Resolved",    priority: "High"    },
          { id: "b13", name: "Bug 3", status: "Open",        priority: "Normal"  },
          { id: "b14", name: "Bug 4", status: "In Progress", priority: "Normal"  },
          { id: "b15", name: "Bug 5", status: "In Progress", priority: "Low"     }
        ]
      },
      {
        id: "p3",
        name: "Project 3",
        bugs: [
          { id: "b21", name: "Bug 1", status: "Open",        priority: "High"    },
          { id: "b22", name: "Bug 2", status: "Resolved",    priority: "High"    },
          { id: "b23", name: "Bug 3", status: "Open",        priority: "Normal"  },
          { id: "b24", name: "Bug 4", status: "In Progress", priority: "Normal"  },
          { id: "b25", name: "Bug 5", status: "In Progress", priority: "Low"     }
        ]
      },
      {
        id: "p4",
        name: "Project 4",
        bugs: [
          { id: "b31", name: "Bug 1", status: "Open",        priority: "High"    },
          { id: "b32", name: "Bug 2", status: "Resolved",    priority: "High"    },
          { id: "b33", name: "Bug 3", status: "Open",        priority: "Normal"  },
          { id: "b34", name: "Bug 4", status: "In Progress", priority: "Normal"  },
          { id: "b35", name: "Bug 5", status: "In Progress", priority: "Low"     }
        ]
      },
      {
        id: "p5",
        name: "Project 5",
        bugs: [
          { id: "b41", name: "Bug 1", status: "Open",        priority: "High"    },
          { id: "b42", name: "Bug 2", status: "Resolved",    priority: "High"    },
          { id: "b43", name: "Bug 3", status: "Open",        priority: "Normal"  },
          { id: "b44", name: "Bug 4", status: "In Progress", priority: "Normal"  },
          { id: "b45", name: "Bug 5", status: "In Progress", priority: "Low"     }
        ]
      }
    ]
  }
});