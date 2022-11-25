# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

The following tickets are based on the assumption that the custom ID will be a 32 or 64 bit integer.  If the custom id will be a string, then the tickets would include criteria to add logic and error handling for differing data types based on whether id or customAgentID were retrieved from the DB, and a third ticket would need to be created for the generateReport function.

<hr>

### Add custom ID for Agents: Add column for custom ID
<strong>Subject:</strong> Add 'customAgentID' column to Agents table in schema

<strong>Acceptance Criteria</strong> 
- Column data type and length parameters should match existing id column
- Should be optional (default value should be null)

<strong>SLA Goal</strong> 15 minutes

<strong>Description:</strong> customAgentID column will be used to store a custom ID that facilities may choose to enter for an agent on the frontend.  The column data type and length should match the existing id column, but should have a default value of null.

<br>

### Add custom ID for Agents: Update get function to check for and use custom ID
<strong>Subject:</strong> Update getShiftsByFacility function

<strong>Acceptance Criteria</strong> 
 - DB query to Agent table should select the agent id only if the customAgentID field is null

<strong>SLA Goal</strong> 30 minutes

<strong>Description:</strong> DB query that retrieves Agent data in the getShiftsByFacility function should use ISNULL for the customAgentID and id fields so that the customAgentID is only selected if not null, and the id field is selected by default.


