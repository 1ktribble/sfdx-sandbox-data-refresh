public with sharing class QueryResults {
    
    @AuraEnabled(cacheable=true)
    public static String returnQueryString(String query){
        return query;
    }
}
