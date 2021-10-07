Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

Steps:

1: Regex for flagging letters as invalid
2: Regex that allows only () and - and spaces but rejects anything else
3: Elminate the eligible symbols and check the length of the string of numbers
3: limit amount of numbers to 9 EXCEPT:
    -there is a 1 present at the beginning- then 10 numbers are allowed
    -there are - or spaces or (): then eliminate those and see if the rest of the numbers total 9 or see case above




