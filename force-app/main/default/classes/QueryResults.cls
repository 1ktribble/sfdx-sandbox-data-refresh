public with sharing class QueryResults {
    
    @AuraEnabled(cacheable=true)
    public static List<SObject> returnQueryString(String query){
        List<SObject> resultsList = Database.query(query);
        return resultsList;
    }
}
