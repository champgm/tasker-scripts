I am having trouble thinking of a way to do this with RCS. We cannot send outbound RCS messages from the phone with tasker... I don't think. But we should still be able to intercept messages.

Here's how things are set up now:
  * Send script
    * Script is triggered every X minutes
    * Payload is packaged, it includes
      * A key, built from current timestamp and number being contacted
      * Current timestamp
    * Payload is stored in tasker's variable set with key
    * Payload is SMSed to number as JSON string with `#echo` command.

Then, a tasker extension/plugin called "AutoNotification" is used to detect and intercept matching notifications.
  * Receive script
    * Parses JSON message payload
    * Gets current timestamp
    * Calculates duration
    * Packages a bunch of metadata
    * POSTs this payload to our `post-body-logger` service, which logs it and has those logs forwarded to elasticsearch

Throughout this process, the scripts send their own processing logs to my Google Voice number with tasker's SMS api so that I can tell what went wrong and where things hang/crash. 