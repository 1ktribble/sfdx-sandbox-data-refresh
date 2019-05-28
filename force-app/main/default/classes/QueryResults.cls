public with sharing class QueryResults {
    
    @AuraEnabled(cacheable=true)
    public static String returnQueryString(String query){
        String fullString = 'Returned from Apex ' + query;
        return fullString;
    }
}
