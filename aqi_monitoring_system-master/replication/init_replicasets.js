config = 
    {"_id" : "AQIMonitoringReplSet", 
        members : [
            {"_id" : 0, host : "localhost:27001"},
            {"_id" : 1, host : "localhost:27002"},
            {"_id" : 2, host : "localhost:27003", arbiterOnly : true}
        ]
    };

rs.initiate(config);
rs.status();
