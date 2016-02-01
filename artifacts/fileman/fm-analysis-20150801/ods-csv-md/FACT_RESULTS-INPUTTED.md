FILE NUMBER | TEMPLATE NAME | GLOBAL REFERENCE | CODE STRING | Valid | Set | Read | Kill | Comments
---|---|---|---|---|---|---|---|---
50 | PSSCOMMON | "^PS(59.7 | " | "S PSONEWW=$S($P($G(^PS(59.7 | 1 | 10)) | ""^"" | 9)=""N"":1 | 1:0) W !! | ""WARNING LABEL SOURCE is ""_$S(PSONEWW:""'NEW'."" | 1:""not 'NEW'."")" |  |  |  |  | 
50.073 | PSOD DUE BUILD QUESTIONNAIRE | "^PS(50.073 | " | "S PSLOCK=+$P(@(""^PS(50.073 | ""_DA(1)_"" | 0)"") | U | 4)" |  |  |  |  | 
50.073 | PSOD DUE BUILD QUESTIONNAIRE | "^PS(50.0732 | " | "S PSQUEST=$P(^PS(50.0732 | $P(@(DIE_DA_"" | 0)"") | U | 2) | 0) | U)" |  |  |  |  | 
50.073 | PSOD DUE BUILD QUESTIONNAIRE | "^PS(50.0732 | " | "S PSQTYP=$P(^PS(50.0732 | $P(@(DIE_DA_"" | 0)"") | U | 2) | 0) | U | 2)" |  |  |  |  | 
51.1 | PSSJ SCHEDULE EDIT |  | "S ZPSJS=$$GET1^DIQ(51.1 | DA | 5 | ""I"")" |  |  |  |  | Using FileMan API
51.1 | PSSJ SCHEDULE EDIT |  | "S ZZZ=$$GET1^DIQ(51.1 | DA | 2 | ""I"")" |  |  |  |  | Using FileMan API
51.1 | PSSJ SCHEDULE EDIT |  | "S PSJS=$$NSO^PSGS0($G(PSSFRQ)) | OFLG=0" |  |  |  |  | "Adds minute |  hour or day to a value"
53.45 | PSJ IUP SUPER EDIT |  | "S PSJ=+$G(^PS(53.45 | DA | 0)) S:PSJ PSJ=$S($D(^XUSEC(""PSJ RPHARM"" | PSJ)):3 | $D(^XUSEC(""PSJ RNURSE"" | PSJ)):1 | $D(^XUSEC(""PSJ PHARM TECH"" | PSJ)):2 | 1:0) S:""13""[PSJ Y=$S(PSJ=1:.02 | 1:.09)" |  |  |  |  | Can use XUSRB API instead of direct global reference
58.2 | PSGW WARD INVENTORY | "^PSI(58.2 | " | "S PSGWSK=$O(^PSI(58.2 | DA | 1 | ""D"" | PSGWSK))" |  |  |  |  | 
58.2 | PSD INV GROUP | "^PSI(58.2 | " | "S PSDSK=$O(^PSI(58.2 | DA | 3 | ""D"" | PSDSK))" |  |  |  |  | 
58.8 | PSAENT | "^PSD(58.8 | " | "N PSAMG S PSAMG=$P($G(^PSD(58.8 | D0 | 4 | D1 | 0)) | U | 3) Q:PSAMG']""""  W:'$O(^XMB(3.8 | ""B"" | PSAMG | 0)) $C(7) | !! | ""The "" | PSAMG | "" mail group has not been created!"" | !! | ""Messages can't be sent until creation."" | !!" |  |  |  |  | 
58.8 | PSAGIP | "^PSD(58.8 | " | "N PSAMG S PSAMG=$P($G(^PSD(58.8 | D0 | 4 | D1 | 0)) | U | 3) Q:PSAMG']""""  W:'$O(^XMB(3.8 | ""B"" | PSAMG | 0)) $C(7) | !! | ""The "" | PSAMG | "" mail group has not been created!"" | !! | ""Messages can't be sent until creation."" | !!" |  |  |  |  | 
59.3 | PSO DISPLAY EDIT | "^PS(59.3 | " | "S PDP=$P(^(0) | ""^"" | 2)" |  |  |  |  | Naked Reference
63 | LR C&S | "^LAB(61.2 | " | "S LRBUG=$P(^LAB(61.2 | X | 0) | U | 3)" |  |  |  |  | 
63 | LRBLPEDIT | "^DD(63 | .05 | " | "I X'=LRABO S O=LRABO | Z=""63 | .05"" D EN^LRUD" |  |  |  |  | 
63 | LRBLPEDIT | "^DD(63 | .06 | " | "I X'=LRRH S O=LRRH | Z=""63 | .06"" D EN^LRUD" |  |  |  |  | 
63 | LRBLPABRH |  | "S LRM=$G(^LR(DA(1) | ""BB"" | DA | 10)) | LRM(2)=$P(LRM | U | 2) | LRM(0)=$P(LRM | U)" |  |  |  |  | ABO INTERPRETATION and ABO TYPING TECH
63 | LRBLPABRH |  | "I LRABO]"""" | LRM'=LRABO W $C(7) | ! | LRM | "" not the ABO group on record"" S O=LRM(0) | Z=""63.01 | 10"" D A^LRUD W ! I LR(""YN"")=2 S $P(^LR(DA(1) | ""BB"" | DA | 10) | U)=LRM(0) | Y=""@10""" |  |  |  |  | ABO TYPING TECH
63 | LRBLPABRH |  | "I LRM(0)]"""" | LRM(0)'=LRM W $C(7) | ! | LRM | "" not the ABO group of present specimen"" S O=LRM(0) | Z=""63.01 | 10"" D A^LRUD W ! I LR(""YN"")=2 S $P(^LR(DA(1) | ""BB"" | DA | 10) | U)=LRM(0) | Y=""@10""" |  |  |  |  | 
63 | LRBLPABRH |  | "I LRABO="""" | LRM]"""" | LRM'=""ND"" S $P(^LR(DA(1) | 0) | U | 5)=LRM" |  |  |  |  | ABO GROUP
63 | LRBLPABRH |  | "I LRM(2)]"""" | LRM(2)'=X S O=LRM(2) | Z=""63.01 | 10.2"" D EN^LRUD" |  |  |  |  | ABO TYPING TECH
63 | LRBLPABRH |  | "S LRM=$G(^LR(DA(1) | ""BB"" | DA | 11)) | LRM(2)=$P(LRM | U | 2) | LRM(0)=$P(LRM | U)" |  |  |  |  | 
63 | LRBLPABRH |  | "I LRRH]"""" | LRM'=LRRH W $C(7) | ! | LRM | "" not the Rh type on record"" S O=LRM(0) | Z=""63.01 | 11"" D A^LRUD W ! I LR(""YN"")=2 S $P(^LR(DA(1) | ""BB"" | DA | 11) | U)=LRM(0) | Y=""@11""" |  |  |  |  | 
63 | LRBLPABRH |  | "I LRM(0)]"""" | LRM(0)'=LRM W $C(7) | ! | LRM | "" not the Rh type on present specimen"" S O=LRM(0) | Z=""63.01 | 11"" D A^LRUD W ! I LR(""YN"")=2 S $P(^LR(DA(1) | ""BB"" | DA | 11) | U)=LRM(0) | Y=""@11""" |  |  |  |  | 
63 | LRBLPABRH |  | "I LRRH="""" | LRM]"""" | LRM'=""ND"" S $P(^LR(DA(1) | 0) | U | 6)=LRM" |  |  |  |  | 
63 | LRBLPABRH |  | "I LRM(2)]"""" | LRM(2)'=X S O=LRM(2) | Z=""63.01 | 11.2"" D EN^LRUD" |  |  |  |  | 
63 | LRBLPOLD |  | "S LR=DA F W=0:0 S W=$O(^LR(LR | 1.7 | W)) Q:W<1  S W(1.7 | W)=63.075" |  |  |  |  | ANTIBODIES IDENTIFIED
63 | LRBLPOLD |  | "F I=0:0 S I=$O(^LR(LR | 1.7 | I)) Q:I<1  S LRBLAI=1 W ! | ?3 | ""ANTIBODIES IDENTIFIED: ""_$P(^LAB(61.3 | I | 0) | ""^"")_""       SNOMED CODE: ""_$P(^LAB(61.3 | I | 0) | ""^"" | 2)" |  |  |  |  | 
63 | LRBLPOLD |  | "F W=0:0 S W=$O(^LR(LR | 1 | W)) Q:W<1  S W(1 | W)=63.13" |  |  |  |  | RBC ANTIGENS PRESENT(other)
63 | LRBLPOLD |  | "F W=0:0 S W=$O(^LR(LR | 1.5 | W)) Q:W<1  S W(1.5 | W)=63.016" |  |  |  |  | RBC ANTIGENS ABSENT(other)
63 | LRBLPOLD |  | "F W=0:0 S W=$O(^LR(LR | 2 | W)) Q:W<1  S W(2 | W)=63.14" |  |  |  |  | HLA ANTIGENS PRESENT
63 | LRBLPOLD |  | "F W=0:0 S W=$O(^LR(LR | 2.1 | W)) Q:W<1  S W(2.1 | W)=63.141" |  |  |  |  | HLA ANTIGENS ABSENT
63 | LRBLSCREEN |  | "S LRM=$G(^LR(DA(1) | ""BB"" | DA | 10)) | LRM(2)=$P(LRM | U | 2) | LRM(0)=$P(LRM | U)" |  |  |  |  | 
63 | LRBLSCREEN |  | "I LRABO]"""" | LRM'=LRABO W $C(7) | ! | LRM | "" not the ABO group on record"" S O=LRM(0) | Z=""63.01 | 10"" D A^LRUD W ! I LR(""YN"")=2 S $P(^LR(DA(1) | ""BB"" | DA | 10) | U)=LRM(0) | Y=""@10""" |  |  |  |  | 
63 | LRBLSCREEN |  | "I LRM(0)]"""" | LRM(0)'=LRM W $C(7) | ! | LRM | "" not the ABO group of present specimen"" S O=LRM(0) | Z=""63.01 | 10"" D A^LRUD W ! I LR(""YN"")=2 S $P(^LR(DA(1) | ""BB"" | DA | 10) | U)=LRM(0) | Y=""@10""" |  |  |  |  | 
63 | LRBLSCREEN |  | "I LRABO="""" | LRM]"""" | LRM'=""ND"" S $P(^LR(DA(1) | 0) | U | 5)=LRM" |  |  |  |  | 
63 | LRBLSCREEN |  | "I LRM(2)]"""" | LRM(2)'=X S O=LRM(2) | Z=""63.01 | 10.2"" D EN^LRUD" |  |  |  |  | 
63 | LRBLSCREEN |  | "S LRM=$G(^LR(DA(1) | ""BB"" | DA | 11)) | LRM(2)=$P(LRM | U | 2) | LRM(0)=$P(LRM | U)" |  |  |  |  | 
63 | LRBLSCREEN |  | "I LRRH]"""" | LRM'=LRRH W $C(7) | ! | LRM | "" not the Rh type on record"" S O=LRM(0) | Z=""63.01 | 11"" D A^LRUD W ! I LR(""YN"")=2 S $P(^LR(DA(1) | ""BB"" | DA | 11) | U)=LRM(0) | Y=""@11""" |  |  |  |  | 
63 | LRBLSCREEN |  | "I LRM(0)]"""" | LRM(0)'=LRM W $C(7) | ! | LRM | "" not the Rh type on present specimen"" S O=LRM(0) | Z=""63.01 | 11"" D A^LRUD W ! I LR(""YN"")=2 S $P(^LR(DA(1) | ""BB"" | DA | 11) | U)=LRM(0) | Y=""@11""" |  |  |  |  | 
63 | LRBLSCREEN |  | "I LRRH="""" | LRM]"""" | LRM'=""ND"" S $P(^LR(DA(1) | 0) | U | 6)=LRM" |  |  |  |  | 
63 | LRBLSCREEN |  | "I LRM(2)]"""" | LRM(2)'=X S O=LRM(2) | Z=""63.01 | 11.2"" D EN^LRUD" |  |  |  |  | 
63 | LRBLSCREEN |  | "S LRM=$S($D(^LR(DA(1) | ""BB"" | DA | 2)):^(2) | 1:"""")" |  |  |  |  | 
63 | LRBLSCREEN |  | "S O=$P(LRM | U) I O]"""" | O'=X S Z=""63.01 | 2.1"" | L(""BB"")=1 D EN^LRUD" |  |  |  |  | 
63 | LRBLSCREEN |  | "S O=$P(LRM | U | 4) I O]"""" | O'=X S Z=""63.01 | 2.4"" | L(""BB"")=1 D EN^LRUD" |  |  |  |  | 
63 | LRBLSCREEN |  | "S O=$P(LRM | U | 6) I O]"""" | O'=X S Z=""63.01 | 2.6"" | L(""BB"")=1 D EN^LRUD" |  |  |  |  | 
63 | LRBLSCREEN |  | "S O=$P(LRM | U | 9) I O]"""" | O'=X S Z=""63.01 | 2.9"" | L(""BB"")=1 D EN^LRUD" |  |  |  |  | 
63 | LRBLSCREEN |  | "S LRM=$S($D(^LR(DA(1) | ""BB"" | DA | 6)):$P(^(6) | U | 1) | 1:"""")" |  |  |  |  | 
63 | LRBLSCREEN |  | "S O=LRM I O]"""" | O'=X S Z=""63.01 | 6"" | L(""BB"")=1 D EN^LRUD" |  |  |  |  | 
63 | LRBLSCREEN |  | "S LRM=$S($D(^LR(DA(2) | ""BB"" | DA(1) | 5 | DA | 0)):^(0) | 1:"""")" |  |  |  |  | 
63 | LRBLSCREEN |  | "S O=$P(LRM | U) I O]"""" | O'=X S Z=""63.46 | .01"" D EN^LRUD" |  |  |  |  | 
63 | LRBLSCREEN |  | "F I=0:0 S I=$O(^LR(DA(1) | ""BB"" | DA | 5 | I)) Q:I<1  S LRBLSA=1 W ! | ?3 | ""SERUM ANTIBODY: ""_$P(^LAB(61.3 | I | 0) | U)_""       SNOMED CODE: ""_$P(^LAB(61.3 | I | 0) | U | 2)" |  |  |  |  | 
63 | LRBLSCREEN |  | "F I=0:0 S I=$O(^LR(DA | 1.7 | I)) Q:I<1  S LRBLAI=1 W ! | ?3 | ""ANTIBODIES IDENTIFIED: ""_$P(^LAB(61.3 | I | 0) | U)_""       SNOMED CODE: ""_$P(^LAB(61.3 | I | 0) | U | 2)" |  |  |  |  | 
63 | LRBLPCMBS |  | "S LRM=$S($D(^LR(DA(1) | ""BB"" | DA | 2)):^(2) | 1:"""")" |  |  |  |  | 
63 | LRBLPCMBS |  | "S O=$P(LRM | U) I O]"""" | O'=X S Z=""63.01 | 2.1"" | L(""BB"")=1 D EN^LRUD" |  |  |  |  | 
63 | LRBLPCMBS |  | "S O=$P(LRM | U | 4) I O]"""" | O'=X S Z=""63.01 | 2.4"" | L(""BB"")=1 D EN^LRUD" |  |  |  |  | 
63 | LRBLPCMBS |  | "S O=$P(LRM | U | 6) I O]"""" | O'=X S Z=""63.01 | 2.6"" | L(""BB"")=1 D EN^LRUD" |  |  |  |  | 
63 | LRBLPCMBS |  | "S O=$P(LRM | U | 9) I O]"""" | O'=X S Z=""63.01 | 2.9"" | L(""BB"")=1 D EN^LRUD" |  |  |  |  | 
63 | LRBLPCMBS |  | "S LRM=$S($D(^LR(DA(1) | ""BB"" | DA | 6)):$P(^(6) | U) | 1:"""")" |  |  |  |  | 
63 | LRBLPCMBS |  | "S O=LRM I O]"""" | O'=X S Z=""63.01 | 6"" | L(""BB"")=1 D EN^LRUD" |  |  |  |  | 
63 | LRBLPCMBS |  | "S LRM=$S($D(^LR(DA(2) | ""BB"" | DA(1) | 5 | DA | 0)):^(0) | 1:"""")" |  |  |  |  | 
63 | LRBLPCMBS |  | "S O=$P(LRM | U) I O]"""" | O'=X S Z=""63.46 | .01"" D EN^LRUD" |  |  |  |  | 
63 | LRBLSPP |  | "S LRM=$S($D(^LR(DA(1) | 1.6 | DA | 0)):^(0) | 1:"""")" |  |  |  |  | 
63 | LRBLSPP |  | "S O=$P(LRM | U) I O | X'=O S Z=""63.017 | .01"" D EN^LRUD" |  |  |  |  | 
63 | LRBLSPP |  | "S O=$P(LRM | U | 4) I O]"""" | O'=X S Z=""63.017 | .04"" D EN^LRUD" |  |  |  |  | 
63 | LRBLSPP |  | "S O=$P(LRM | U | 2) I O]"""" | O'=X S Z=""63.017 | .02"" D EN^LRUD" |  |  |  |  | 
63 | LRBLSPP |  | "S O=$P(LRM | U | 3) I O]"""" | O'=X S Z=""63.017 | .03"" D EN^LRUD" |  |  |  |  | 
63 | LRBLSPP |  | "S O=$P(LRM | U | 5) I O]"""" | O'=X S Z=""63.017 | .05"" D EN^LRUD" |  |  |  |  | 
63 | LRBLSPP |  | "S O=$P(LRM | U | 6) I O]"""" | O'=X S Z=""63.017 | .06"" D EN^LRUD" |  |  |  |  | 
63 | LRBLSPP |  | "S O=$P(LRM | U | 7) I O]"""" | O'=X S Z=""63.017 | .07"" D EN^LRUD" |  |  |  |  | 
63 | LRBLSPP |  | "S O=$P(LRM | U | 8) I O]"""" | O'=X S Z=""63.017 | .08"" D EN^LRUD" |  |  |  |  | 
63 | LRBLPCS | "^LAB(66 | " | "S C=X | LRN=$P(^LAB(66 | X | 0) | ""^"" | 9)" |  |  |  |  | 
63 | LRBLPAG |  | "F LRM=0:0 S LRM=$O(^LR(LRDFN | ""BB"" | LRI | 1.1 | LRM)) Q:'LRM  S LRM(1.1 | LRM)=63.011" |  |  |  |  | 
63 | LRBLPAG |  | "S A=1.2 | B=1.5 | C=1.1 D P^LRBLU S:'$D(X) Y=""@1""" |  |  |  |  | 
63 | LRBLPAG |  | "F LRM=0:0 S LRM=$O(^LR(LRDFN | ""BB"" | LRI | 1.2 | LRM)) Q:'LRM  S LRM(1.2 | LRM)=63.0112" |  |  |  |  | 
63 | LRBLPAG |  | "S A=1.1 | B=1 | C=1.2 D P^LRBLU S:'$D(X) Y=""@3""" |  |  |  |  | 
63 | LRBLPTXR |  | "S O=$P(LR | U) I O]"""" | O'=X S Z=""63.0171 | .01"" D EN^LRUD" |  |  |  |  | 
63 | LRBLPTXR |  | "S O=$P(LR | U | 2) I O]"""" | O'=X S Z=""63.0171 | .02"" D EN^LRUD" |  |  |  |  | 
63 | LRBLPTXR |  | "S O=$P(LR | U | 3) I O]"""" | O'=X S Z=""63.0171 | .03"" D EN^LRUD" |  |  |  |  | 
65 | LRBLID |  | "S $P(^LRD(65 | DA | 0) | ""^"" | 10)="""" | $P(^(0) | ""^"" | 14)=$S(LRE:""-""_LRE | 1:"""")" |  |  |  |  | 
65 | LRBLIABRH |  | "S LRM=$S($D(^LRD(65 | DA | 10)):^(10) | 1:"""") | LRM(1)=$P(LRM | ""^"" | 2) | LRM=$P(LRM | ""^"")" |  |  |  |  | 
65 | LRBLIABRH |  | "I LRM]"""" | LRM'=X S Z=""65 | 10"" | O=LRM D EN^LRUD S $P(^LRD(65 | DA | 10) | ""^"" | 4)=""""" |  |  |  |  | 
65 | LRBLIABRH |  | "I LRM(1)]"""" | LRM(1)'=X S Z=""65 | 10.2"" | O=LRM(1) D EN^LRUD" |  |  |  |  | 
65 | LRBLIABRH |  | "I LRT&(LRM=""""!(LRM=""ND"")) W *7 | "" required for this unit"" K ^LRD(65 | DA | 10) S ^LRD(65 | ""AT"" | $P(^LRD(65 | DA | 0) | U) | 10 | DA)="""" | Y=""@10""" |  |  |  |  | 
65 | LRBLIABRH |  | "I LRABO]"""" | LRM]"""" | LRM'=LRABO W *7 | ! | LRM | "" not the ABO group on record"" | ! | "" Present testing OK "" S %=1 D YN^LRU I %=2 K ^LRD(65 | DA | 10) S ^LRD(65 | ""AT"" | $P(^LRD(65 | DA | 0) | U) | 10 | DA)="""" | Y=""@10""" |  |  |  |  | 
65 | LRBLIABRH |  | "I LRABO="""" | LRM]"""" | LRM'=""ND"" S W=^LRD(65 | DA | 0) | ^(0)=$P(W | U)_U_$P(W | U | 2)_U_$P(W | U | 3)_U_$P(W | U | 4)_U_$P(W | U | 5)_U_$P(W | U | 6)_U_LRM_U_$P(W | U | 8 | 99)" |  |  |  |  | 
65 | LRBLIABRH |  | "S LRM=$S($D(^LRD(65 | DA | 11)):^(11) | 1:"""") | LRM(1)=$P(LRM | ""^"" | 2) | LRM=$P(LRM | ""^"")" |  |  |  |  | 
65 | LRBLIABRH |  | "I LRM]"""" | LRM'=X S Z=""65 | 11"" | O=LRM D EN^LRUD S $P(^LRD(65 | DA | 11) | ""^"" | 4)=""""" |  |  |  |  | 
65 | LRBLIABRH |  | "I LRM(1)]"""" | LRM(1)'=X S Z=""65 | 11.2"" | O=LRM(1) D EN^LRUD" |  |  |  |  | 
65 | LRBLIABRH |  | "I LRT&(LRRH[""NEG"")&(LRM=""""!(LRM=""ND"")) W *7 | "" required for this unit"" K ^LRD(65 | DA | 11) S ^LRD(65 | ""AT"" | $P(^LRD(65 | DA | 0) | U) | 11 | DA)="""" | Y=""@11""" |  |  |  |  | 
65 | LRBLIABRH |  | "I LRRH]"""" | LRM]"""" | LRM'=LRRH W *7 | ! | LRM | "" not the Rh type on record"" | ! | "" Present testing OK "" S %=1 D YN^LRU I %=2 K ^LRD(65 | DA | 11) S ^LRD(65 | ""AT"" | $P(^LRD(65 | DA | 0) | U) | 11 | DA)="""" | Y=""@11""" |  |  |  |  | 
65 | LRBLIABRH |  | "I LRRH="""" | LRM]"""" | LRM'=""ND"" S W=^LRD(65 | DA | 0) | ^(0)=$P(W | U)_U_$P(W | U | 2)_U_$P(W | U | 3)_U_$P(W | U | 4)_U_$P(W | U | 5)_U_$P(W | U | 6)_U_$P(W | U | 7)_U_LRM_U_$P(W | U | 9 | 99)" |  |  |  |  | 
65 | LRBLIXR |  | "S LRM=$S($D(^LRD(65 | DA(1) | 2 | DA | 0)):^(0) | 1:"""") I $D(LRM) S PNODE=LRM | LRIEN=DA(1) | LRDFN=DA D PAT^LRBLAUD | BLD3^LRBLAUD" |  |  |  |  | 
65 | LRBLIXR |  | "S O=$P(LRM | U) I O'=X S Z=""65.01 | .01"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIXR |  | "S O=$P(LRM | U | 2) I O'=X S Z=""65.01 | .02"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIXR |  | "S LRM=$S($D(^LRD(65 | DA(2) | 2 | DA(1) | 1 | DA | 0)):^(0) | 1:"""") I $D(LRM) D BLD^LRBLAUD S BNODE=LRM" |  |  |  |  | 
65 | LRBLIXR |  | "S O=$P(LRM | U) I O'=X S Z=""65.02 | .01"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIXR |  | "S O=$P(LRM | U | 2) I O'=X S Z=""65.02 | .02"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIXR |  | "S O=$P(LRM | U | 3) I O'=X S Z=""65.02 | .03"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIXR |  | "S O=$P(LRM | U | 4) I O'=X S Z=""65.02 | .04"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIXR |  | "S O=$P(LRM | U | 9) I O'=X S Z=""65.02 | .09"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIXR |  | "S O=$P(LRM | U | 5) I O'=X S Z=""65.02 | .05"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIXR |  | "S O=$P(LRM | U | 7) I O'=X S Z=""65.02 | .07"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIXR |  | "S O=$P(LRM | U | 8) I O'=X S Z=""65.02 | .08"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIXR |  | "S O=$P(LRM | U | 10) I O'=X S Z=""65.02 | .1"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIXR |  | "S LRM=$S($D(^LRD(65 | DA(1) | 3 | DA | 0)):^(0) | 1:"""") I $D(LRM) S LRIEN=DA(1) | NODE=LRM | LRI=DA D REL^LRBLAUD" |  |  |  |  | 
65 | LRBLIXR |  | "S O=$P(LRM | U) I O'=X S Z=""65.03 | .01"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIXR |  | "S O=$P(LRM | U | 2) I O'=X S Z=""65.03 | .02"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIXR |  | "S O=$P(LRM | U | 3) I O'=X S Z=""65.03 | .03"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIXR |  | "S O=$P(LRM | U | 4) I O'=X S Z=""65.03 | .04"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIXR |  | "S O=$P(LRM | U | 5) I O'=X S Z=""65.03 | .05"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIXR |  | "S O=$P(LRM | U | 6) I O'=X S Z=""65.03 | .06"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIXR |  | "S O=$P(LRM | U | 7) I O'=X S Z=""65.03 | .07"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIXR |  | "S LRM=$S($D(^LRD(65 | LR(""UNIT"") | 8)):^LRD(65 | LR(""UNIT"") | 8) | 1:"""")" |  |  |  |  | 
65 | LRBLIXR |  | "S O=$P(LRM | U) I O'=X S Z=""65 | 8"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIXR |  | "S O=$P(LRM | U | 2) I O'=X S Z=""65 | 8.1"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIXR |  | "S O=$P(LRM | U | 3) I O'=X S Z=""65 | 8.3"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIDTM |  | "S LRO=$S($D(^LRD(65 | DA | 4)):^(4) | 1:"""") | LRO(1)=$P(LRO | U) I LRO(1)]"""" S LRIEN=DA D DISP^LRBLAUD1 | MOD^LRBLAUD1" |  |  |  |  | 
65 | LRBLIDTM |  | "S LRW(9)=X | O=$P(LRO | ""^"") I O'=X S Z=""65 | 4.1"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIDTM |  | "I LRW(9)'=LRO(1) S $P(^LRD(65 | DA | 4) | U)=LRW(9)" |  |  |  |  | 
65 | LRBLIDTM |  | "S LRQ=X | LRI=9999999-X | O=$P(LRO | ""^"" | 2)" |  |  |  |  | 
65 | LRBLIDTM |  | "I O'=X S Z=""65 | 4.2"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIDTM |  | "S O=$P(LRO | ""^"" | 3) I O'=X S Z=""65 | 4.3"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIDTM |  | "S O=$P(LRO | ""^"" | 4) I O'=X S Z=""65 | 4.4"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIDTM |  | "S LRW=$S($D(^LRD(65 | DA | 6)):^(6) | 1:"""")" |  |  |  |  | 
65 | LRBLIDTM |  | "S (LRT | O)=$P(LRW | ""^"") | LRT(1)=X" |  |  |  |  | 
65 | LRBLIDTM |  | "I LRT(1) | $D(^LRD(65 | DA | 8)) | +^(8) | +^(8)'=LRT(1) W $C(7) | !?23 | ""AUTOLOGOUS or DIRECTED DONATION. MUST BE SAME PT AS BEFORE"" S LRT(1)=^LRD(65 | DA | 6) | ^(6)=LRT_U_$P(LRT(1) | U | 2 | 99) | Y=6.1" |  |  |  |  | 
65 | LRBLIDTM |  | "I O'=X S Z=""65 | 6.1"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIDTM |  | "S O=$P(LRW | ""^"" | 2) I O'=X S Z=""65 | 6.2"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIDTM |  | "S O=$P(LRW | U | 6) I O]"""" | O'=X S Z=""65 | 6.6"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIDTM |  | "S O=$P(LRW | ""^"" | 3) I O'=X S Z=""65 | 6.3"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIDTM |  | "S O=$P(LRW | U | 7) I O'=X S Z=""65 | 6.7"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIDTM |  | "S O=$P(LRW | ""^"" | 5) I O'=X S Z=""65 | 6.5"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIDTM |  | "S O=$P(LRW | ""^"" | 8) I O'=X S Z=""65 | 6.8"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIDTM | "^LRD(65 | " | "S LRW=$S($D(^LRD(65 | DA(1) | 9 | DA | 0)):^(0) | 1:"""")" |  |  |  |  | 
65 | LRBLIDTM |  | "S O=$P(LRW | ""^"") I O'=X S Z=""65.091 | .01"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIDTM |  | "S O=$P(LRW | ""^"" | 2) I O'=X S Z=""65.091 | .02"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIDTM |  | "S O=$P(LRW | ""^"" | 3) I O'=X S Z=""65.091 | .03"" D EN^LRUD" |  |  |  |  | 
65 | LRBLILG |  | "S LRW=^LRD(65 | DA | 0)" |  |  |  |  | 
65 | LRBLILG |  | "S O=$P(LRW | U | 16) I O'=X S Z=""65 | .16"" D EN^LRUD" |  |  |  |  | 
65 | LRBLILG |  | "S O=$P(LRW | U | 2) I O'=X S Z=""65 | .02"" D EN^LRUD" |  |  |  |  | 
65 | LRBLILG |  | "S O=$P(LRW | U | 3) I O'=X S Z=""65 | .03"" D EN^LRUD" |  |  |  |  | 
65 | LRBLILG |  | "S (LRO | O)=$P(LRW | U | 4) | W=X I O'=X S Z=""65 | .04"" D EN^LRUD" |  |  |  |  | 
65 | LRBLILG |  | "S LRO=$S($D(^LRD(65 | DA | 8)):^(8) | 1:0)" |  |  |  |  | 
65 | LRBLILG |  | "S O=$P(LRO | U) I O]"""" | O'=X S Z=""65 | 8"" D EN^LRUD" |  |  |  |  | 
65 | LRBLILG |  | "S O=$P(LRO | U | 2) I O]"""" | O'=X S Z=""65 | 8.1"" D EN^LRUD" |  |  |  |  | 
65 | LRBLILG |  | "S O=$P(LRO | U | 3) I O]"""" | O'=X S Z=""65 | 8.3"" D EN^LRUD" |  |  |  |  | 
65 | LRBLILG |  | "S O=$P(LRW | U | 5) I O'=X S Z=""65 | .05"" D EN^LRUD" |  |  |  |  | 
65 | LRBLILG |  | "S O=$P(LRW | U | 6) I O'=X S Z=""65 | .06"" D EN^LRUD" |  |  |  |  | 
65 | LRBLILG |  | "S O=$P(LRW | U | 7) I O'=X S Z=""65 | .07"" D EN^LRUD" |  |  |  |  | 
65 | LRBLILG |  | "S O=$P(LRW | U | 8) I O'=X S Z=""65 | .08"" D EN^LRUD" |  |  |  |  | 
65 | LRBLILG |  | "S O=$P(LRW | U | 10) I O'=X S Z=""65 | .1"" D EN^LRUD" |  |  |  |  | 
65 | LRBLILG |  | "S O=$P(LRW | U | 11) I O'=X S Z=""65 | .11"" D EN^LRUD" |  |  |  |  | 
65 | LRBLILG |  | "S O=$P(LRW | U | 12) I O'=X S Z=""65 | .12"" D EN^LRUD" |  |  |  |  | 
65 | LRBLILG |  | "S O=$P(LRW | U | 14) I O'=X S Z=""65 | .14"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIAG |  | "S LR=DA F LRW=0:0 S LRW=$O(^LRD(65 | LR | 60 | LRW)) Q:'LRW  S LRW(60 | LRW)=65.04" |  |  |  |  | 
65 | LRBLIAG |  | "F LRW=0:0 S LRW=$O(^LRD(65 | LR | 70 | LRW)) Q:'LRW  S LRW(70 | LRW)=65.05" |  |  |  |  | 
65 | LRBLIAG |  | "S LRW=$P(^LRD(65 | LR | 0) | ""^"" | 15)" |  |  |  |  | 
65 | LRBLIAG |  | "I LRW]"""" | X'=LRW S O=LRW | Z=""65 | 91"" D EN^LRUD" |  |  |  |  | 
65 | LRBLIAG |  | "F LRW=0:0 S LRW=$O(^LRD(65 | LR | 80 | LRW)) Q:'LRW  S LRW(80 | LRW)=65.08" |  |  |  |  | 
65 | LRBLIAG |  | "F LRW=0:0 S LRW=$O(^LRD(65 | LR | 90 | LRW)) Q:'LRW  S LRW(90 | LRW)=65.09" |  |  |  |  | 
65.5 | LRBLDC |  | "S LRO=$P(^LRE(DA(1) | 5 | DA | 0) | U | 10)" |  |  |  |  | 
65.5 | LRBLDC |  | "I LRO]"""" | LRO'=X S O=LRO | Z=""65.54 | 6.1"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDC |  | "S LRO=$S($D(^LRE(DA(1) | 5 | DA | 2)):$P(^(2) | U | 4) | 1:"""")" |  |  |  |  | 
65.5 | LRBLDC |  | "I LRO]"""" | LRO'=X S O=LRO | Z=""65.54 | 4.4"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDEDIT |  | "I X'=LRABO S O=LRABO | Z=""65.5 | .05"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDEDIT |  | "I X'=LRRH S O=LRRH | Z=""65.5 | .06"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDEF |  | "S LRM=^LRE(DA | 0)" |  |  |  |  | 
65.5 | LRBLDEF |  | "S O=$P(LRM | ""^"" | 10) | Z=""65.5 | .1"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDEF |  | "S O=$P(LRM | ""^"" | 12) I O]"""" | O'=X S Z=""65.5 | .12"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDEF |  | "S O=$P(LRM | ""^"" | 16) I O]"""" | O'=X S Z=""65.5 | .16"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDEMO |  | "S LR(""SSN"")=$P($G(^LAB(69.9 | 1 | 8 | 1 | 0)) | U | 5)" |  |  |  |  | 
65.5 | LRBLDEMO |  | "S LRM=^LRE(DA | 0)" |  |  |  |  | 
65.5 | LRBLDEMO |  | "I O'=X S Z=""65.5 | .01"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDEMO |  | "S O=$P(LRM | U | 13) I O'=X S Z=""65.5 | .13"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDAG |  | "S LRQ=DA F LRM=0:0 S LRM=$O(^LRE(LRQ | 1.1 | LRM)) Q:'LRM  S LRM(1.1 | LRM)=65.56" |  |  |  |  | 
65.5 | LRBLDAG |  | "F LRM=0:0 S LRM=$O(^LRE(LRQ | 1.2 | LRM)) Q:'LRM  S LRM(1.2 | LRM)=65.57" |  |  |  |  | 
65.5 | LRBLDAG |  | "S LRM=$P(^LRE(LRQ | 0) | ""^"" | 15)" |  |  |  |  | 
65.5 | LRBLDAG |  | "I LRM]"""" | X'=LRM S O=LRM | Z=""65.5 | 6.5"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDAG |  | "F LRM=0:0 S LRM=$O(^LRE(LRQ | 1.3 | LRM)) Q:'LRM  S LRM(1.3 | LRM)=65.58" |  |  |  |  | 
65.5 | LRBLDAG |  | "F LRM=0:0 S LRM=$O(^LRE(LRQ | 1.4 | LRM)) Q:'LRM  S LRM(1.4 | LRM)=65.59" |  |  |  |  | 
65.5 | LRBLDON |  | "S LRM=$S($D(^LRE(DA(1) | 5 | DA | 0)):^(0) | 1:"""")" |  |  |  |  | 
65.5 | LRBLDON |  | "S O=$P(LRM | U) I O]"""" | O'=X S Z=""65.54 | .01"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDON |  | "S O=$P(LRM | U | 8) I O]"""" | O'=X S Z=""65.54 | .011"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDON |  | "S O=$P(LRM | U | 6) I O]"""" | O'=X S Z=""65.54 | .02"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDON |  | "S O=$P(LRM | U | 7) I O]"""" | O'=X S Z=""65.54 | .03"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDON |  | "S O=$P(LRM | U | 2) I O]"""" | O'=X S Z=""65.54 | 1"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDON |  | "S O=$P(LRM | U | 11) I O]"""" | O'=X S Z=""65.54 | 1.1"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDON |  | "S O=$P(LRM | U | 3) I O]"""" | O'=X S Z=""65.54 | 3"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDON |  | "S O=$P(LRM | U | 4) I O]"""" | O'=X S Z=""65.54 | 4"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDON |  | "S O=$P(LRM | U | 9) I O]"""" | O'=X S Z=""65.54 | 6"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDON |  | "S O=$P(LRM | U | 5) I O]"""" | O'=X S Z=""65.54 | 5"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDON |  | "S O=$P(LRM | U | 10) I O]"""" | O'=X S Z=""65.54 | 6.1"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDNEW | "^LAB(69.9 | " | "S LR(""SSN"")=$P($G(^LAB(69.9 | 1 | 8 | 1 | 0)) | U | 5)" |  |  |  |  | 
65.5 | LRBLDABRH |  | "S LRABO=$P(^LRE(DA(1) | 0) | U | 5) | LRRH=$P(^(0) | U | 6) | LRID=$P(^(5 | DA | 0) | U | 4)" |  |  |  |  | 
65.5 | LRBLDABRH |  | "S LRM=$S($D(^LRE(DA(1) | 5 | DA | 10)):^(10) | 1:"""") | Z=""@1"" D S^LRBLDX" |  |  |  |  | 
65.5 | LRBLDABRH |  | "S O=$P(LRM | U) I O]"""" | O'=X S Z=""65.54 | 10"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDABRH |  | "S O=$P(LRM | U | 2) I O]"""" | O'=X S Z=""65.54 | 10.2"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDABRH |  | "I LRABO]"""" | LRA'=LRABO W *7 | ! | LRA | "" not the ABO group on record"" | ! | ""Is present testing OK "" S %=1 D YN^LRU I %=2 S ^LRE(""AT"" | LRID | 10 | DA(1) | DA)="""" | Y=""@10""" |  |  |  |  | 
65.5 | LRBLDABRH |  | "I LRABO="""" | LRA]"""" | LRA'=""ND"" S W=^LRE(DA(1) | 0) | ^(0)=$P(W | U | 1)_U_$P(W | U | 2)_U_$P(W | U | 3)_U_$P(W | U | 4)_U_LRA_U_$P(W | U | 6 | 99)" |  |  |  |  | 
65.5 | LRBLDABRH |  | "S LRM=$S($D(^LRE(DA(1) | 5 | DA | 11)):^(11) | 1:"""") | Z=0 D S^LRBLDX" |  |  |  |  | 
65.5 | LRBLDABRH |  | "S O=$P(LRM | U) I O]"""" | O'=X S Z=""65.54 | 11"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDABRH |  | "S O=$P(LRM | U | 2) I O]"""" | O'=X S Z=""65.54 | 11.2"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDABRH |  | "I LRRH]"""" | LRA'=LRRH W *7 | ! | LRA | "" not the Rh type on record"" | ! | ""Is present testing OK "" S %=1 D YN^LRU I %=2 S ^LRE(""AT"" | LRID | 11 | DA(1) | DA)="""" | Y=""@1""" |  |  |  |  | 
65.5 | LRBLDABRH |  | "I LRRH="""" | LRA]"""" | LRA'=""ND"" S W=^LRE(DA(1) | 0) | ^(0)=$P(W | U | 1 | 5)_U_LRA_U_$P(W | U | 7 | 99)" |  |  |  |  | 
65.5 | LRBLDCP |  | "I '$D(LRAA) S LRAA=$O(^LRO(68 | ""B"" | ""BLOOD BANK"" | 0)) K:'LRAA LRAA" |  |  |  |  | 
65.5 | LRBLDCP |  | "S LRA="""" | LRO=$P(^LRE(DA | 0) | ""^"")" |  |  |  |  | 
65.5 | LRBLDCP |  | "S (LRP(0) | LRP)=X | LRE=^LRE(DA | 0)" |  |  |  |  | 
65.5 | LRBLDCP |  | "I LRO'=X S O=LRO | Z=""65.5 | .01"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDCP |  | "S LRM=$S($D(^LRE(DA(1) | 5 | DA | 0)):^(0) | 1:"""")" |  |  |  |  | 
65.5 | LRBLDCP |  | "I $D(LRM) S LRDONOR=DA(1) | NODE=LRM D BEG^LRBLDRR3" |  |  |  |  | 
65.5 | LRBLDCP |  | "   I $D(LRM) S NODE1=$G(^LRE(DA(1) | 5 | DA | 2))" |  |  |  |  | 
65.5 | LRBLDCP |  | "   S O=$P(LRM | U) I O'=X S Z=""65.54 | .01"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDCP |  | "   S O=$P(LRM | U | 8) I O]"""" | O'=X S Z=""65.54 | .011"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDCP |  | "   S O=$P(LRM | U | 6) I O]"""" | O'=X S Z=""65.54 | .02"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDCP |  | "   S O=$P(LRM | U | 7) I O]"""" | O'=X S Z=""65.54 | .03"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDCP |  | "   S O=$P(LRM | U | 2) I O]"""" | O'=X S Z=""65.54 | 1"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDCP |  | "   S O=$P(LRM | U | 11) I O]"""" | O'=X S Z=""65.54 | 1.1"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDCP |  | "   S O=$P(LRM | U | 12) I O]"""" | O'=X S Z=""65.54 | 1.2"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDCP |  | "   I LRT=""A"" | '$P(^LRE(DA(1) | 5 | DA | 0) | U | 12) S LR(""AUT"")=0 W $C(7) | !! | ""Autologous donation and RESTRICTED FOR: field not entered."" | !" |  |  |  |  | 
65.5 | LRBLDCP |  | "   S O=$P(LRM | U | 5) I O]"""" | O'=X S Z=""65.54 | 5"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDCP |  | "   S O=$P(LRM | U | 9) I O]"""" | O'=X S Z=""65.54 | 6"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDCP |  | "   S O=$P(LRM | U | 3) I O]"""" | O'=X S Z=""65.54 | 3"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDCP |  | "   S O=$P(LRM | U | 4) I O]"""" | O'=X S Z=""65.54 | 4"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDCP |  | "   S LRM=$S($D(^LRE(DA(1) | 5 | DA | 2)):^(2) | 1:"""")" |  |  |  |  | 
65.5 | LRBLDCP |  | "   S O=$P(LRM | U) I O]"""" | O'=X S Z=""65.54 | 4.1"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDCP |  | "   I X S B=$P(^DD(65.54 | 4.1 | 0) | U | 3) D F^LRBLU S LRX(1)=X" |  |  |  |  | 
65.5 | LRBLDCP |  | "   S O=$P(LRM | U | 9) I O]"""" | O'=X S Z=""65.54 | 4.11"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDCP |  | "   I X S B=$P(^DD(65.54 | 4.11 | 0) | U | 3) D F^LRBLU S LRX(2)=X" |  |  |  |  | 
65.5 | LRBLDCP |  | "   S O=$P(LRM | U | 10) I O]"""" | O'=X S Z=""65.54 | 4.15"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDCP |  | "   S O=$P(LRM | U | 2) | LRT=X I O]"""" | O'=X S Z=""65.54 | 4.2"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDCP |  | "   S O=$P(LRM | U | 3) I O]"""" | O'=X S Z=""65.54 | 4.3"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDCP |  | "   S O=$P(LRM | U | 5) I O]"""" | O'=X S Z=""65.54 | 4.5"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDCP |  | "   S O=$P(LRM | U | 6) I O]"""" | O'=X S Z=""65.54 | 4.6"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDCP |  | "   S O=$P(LRM | U | 7) I O]"""" | O'=X S Z=""65.54 | 4.7"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDCP |  | "   S O=$P(LRM | U | 8) I O]"""" | O'=X S Z=""65.54 | 4.8"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDNEWM |  | "S LR(""SSN"")=$P($G(^LAB(69.9 | 1 | 8 | 1 | 0)) | U | 5)" |  |  |  |  | 
65.5 | LRBLDCPN |  | "   S LRM=$S($D(^LRE(DA(1) | 5 | DA | 0)):^(0) | 1:"""")" |  |  |  |  | 
65.5 | LRBLDCPN |  | "   S O=$P(LRM | U) I O'=X S Z=""65.54 | .01"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDCPN |  | "   S O=$P(LRM | U | 8) I O]"""" | O'=X S Z=""65.54 | .011"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDCPN |  | "   S O=$P(LRM | U | 5) I O]"""" | O'=X S Z=""65.54 | 5"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDCPN |  | "   S O=$P(LRM | U | 9) I O]"""" | O'=X S Z=""65.54 | 6"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDCPN |  | "   S O=$P(LRM | U | 3) I O]"""" | O'=X S Z=""65.54 | 3"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDCPN |  | "   S O=$P(LRM | U | 4) I O]"""" | O'=X S Z=""65.54 | 4"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDCPN |  | "   S LRM=$S($D(^LRE(DA(1) | 5 | DA | 2)):^(2) | 1:"""")" |  |  |  |  | 
65.5 | LRBLDCPN |  | "   S O=$P(LRM | U) I O]"""" | O'=X S Z=""65.54 | 4.1"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDCPN |  | "   I X S B=$P(^DD(65.54 | 4.1 | 0) | U | 3) D F^LRBLU S LRX(1)=X" |  |  |  |  | 
65.5 | LRBLDCPN |  | "  S O=$P(LRM | U | 9) I O]"""" | O'=X S Z=""65.54 | 4.11"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDCPN |  | "   I X S B=$P(^DD(65.54 | 4.11 | 0) | U | 3) D F^LRBLU S LRX(2)=X" |  |  |  |  | 
65.5 | LRBLDCPN |  | "   S O=$P(LRM | U | 10) I O]"""" | O'=X S Z=""65.54 | 4.15"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDCPN |  | "   S O=$P(LRM | U | 2) | LRT=X I O]"""" | O'=X S Z=""65.54 | 4.2"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDCPN |  | "   S O=$P(LRM | U | 3) I O]"""" | O'=X S Z=""65.54 | 4.3"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDCPN |  | "   S O=$P(LRM | U | 5) I O]"""" | O'=X S Z=""65.54 | 4.5"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDCPN |  | "   S O=$P(LRM | U | 6) I O]"""" | O'=X S Z=""65.54 | 4.6"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDCPN |  | "   S O=$P(LRM | U | 7) I O]"""" | O'=X S Z=""65.54 | 4.7"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDCPN |  | "   S O=$P(LRM | U | 8) I O]"""" | O'=X S Z=""65.54 | 4.8"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDT |  | "   S LRM=$S($D(^LRE(DA(1) | 5 | DA | 12)):^(12) | 1:"""") | Z=""@13"" D S^LRBLDT" |  |  |  |  | 
65.5 | LRBLDT |  | "   S O=$P(LRM | U) I O]"""" | O'=X S Z=""65.54 | 12"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDT |  | "   S O=$P(LRM | U | 2) I O]"""" | O'=X S Z=""65.54 | 12.2"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDT |  | "   I X]"""" S A=12 D R^LRBLDT" |  |  |  |  | 
65.5 | LRBLDT |  | "   S LRM=$S($D(^LRE(DA(1) | 5 | DA | 13)):^(13) | 1:"""") | Z=""@14"" D S^LRBLDT" |  |  |  |  | 
65.5 | LRBLDT |  | "   S O=$P(LRM | U) I O]"""" | O'=X S Z=""65.54 | 13"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDT |  | "   S O=$P(LRM | U | 2) I O]"""" | O'=X S Z=""65.54 | 13.2"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDT |  | "   I X]"""" S A=13 D R^LRBLDT" |  |  |  |  | 
65.5 | LRBLDT |  | "   S LRM=$S($D(^LRE(DA(1) | 5 | DA | 14)):^(14) | 1:"""") | Z=""@15"" D S^LRBLDT" |  |  |  |  | 
65.5 | LRBLDT |  | "   S O=$P(LRM | U) I O]"""" | O'=X S Z=""65.54 | 14"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDT |  | "   S O=$P(LRM | U | 2) I O]"""" | O'=X S Z=""65.54 | 14.2"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDT |  | "   I X]"""" S A=14 D R^LRBLDT" |  |  |  |  | 
65.5 | LRBLDT |  | "   S LRM=$S($D(^LRE(DA(1) | 5 | DA | 15)):^(15) | 1:"""") | Z=""@16"" D S^LRBLDT" |  |  |  |  | 
65.5 | LRBLDT |  | "   I X]"""" S LR(65.54 | 15)=X K ^LRE(""AT"" | LRQ(1) | 15 | LRQ | LRI)" |  |  |  |  | 
65.5 | LRBLDT |  | "   S O=$P(LRM | U) I O]"""" | O'=X S Z=""65.54 | 15"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDT |  | "   S O=$P(LRM | U | 2) I O]"""" | O'=X S Z=""65.54 | 15.2"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDT |  | "   I X]"""" S A=15 D R^LRBLDT" |  |  |  |  | 
65.5 | LRBLDT |  | "   S LRM=$S($D(^LRE(DA(1) | 5 | DA | 16)):^(16) | 1:"""") | Z=""@17"" D S^LRBLDT" |  |  |  |  | 
65.5 | LRBLDT |  | "   S O=$P(LRM | U) I O]"""" | O'=X S Z=""65.54 | 16"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDT |  | "   S O=$P(LRM | U | 2) I O]"""" | O'=X S Z=""65.54 | 16.2"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDT |  | "   I X]"""" S A=16 D R^LRBLDT" |  |  |  |  | 
65.5 | LRBLDT |  | "   S LRM=$S($D(^LRE(DA(1) | 5 | DA | 17)):^(17) | 1:"""") | Z=""@18"" D S^LRBLDT" |  |  |  |  | 
65.5 | LRBLDT |  | "   S O=$P(LRM | U) I O]"""" | O'=X S Z=""65.54 | 17"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDT |  | "   S O=$P(LRM | U | 2) I O]"""" | O'=X S Z=""65.54 | 17.2"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDT |  | "   I X]"""" S A=17 D R^LRBLDT" |  |  |  |  | 
65.5 | LRBLDT |  | "   S LRM=$S($D(^LRE(DA(1) | 5 | DA | 18)):^(18) | 1:"""") | Z=0 D S^LRBLDT" |  |  |  |  | 
65.5 | LRBLDT |  | "   S O=$P(LRM | U) I O]"""" | O'=X S Z=""65.54 | 18"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDT |  | "   S O=$P(LRM | U | 2) I O]"""" | O'=X S Z=""65.54 | 18.2"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDT |  | "   I X]"""" S A=18 D R^LRBLDT" |  |  |  |  | 
65.5 | LRBLDT |  | "   S LRM=$S($D(^LRE(DA(1) | 5 | DA | 19)):^(19) | 1:"""") | Z=0 D S^LRBLDT" |  |  |  |  | 
65.5 | LRBLDT |  | "   S O=$P(LRM | U) I O]"""" | O'=X S Z=""65.54 | 19"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDT |  | "   S O=$P(LRM | U | 2) I O]"""" | O'=X S Z=""65.54 | 19.2"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDT |  | "   I X]"""" S A=19 D R^LRBLDT" |  |  |  |  | 
65.5 | LRBLDT |  | "   S LRM=$S($D(^LRE(DA(1) | 5 | DA | 20)):^(20) | 1:"""") | Z=0 D S^LRBLDT" |  |  |  |  | 
65.5 | LRBLDT |  | "   S O=$P(LRM | U) I O]"""" | O'=X S Z=""65.54 | 20"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDT |  | "   S O=$P(LRM | U | 2) I O]"""" | O'=X S Z=""65.54 | 20.2"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDT |  | "   I X]"""" S A=20 D R^LRBLDT" |  |  |  |  | 
65.5 | LRBLDUC |  | "   S LRM=$S($D(^LRE(DA(1) | 5 | DA | 10)):^(10) | 1:"""") | Z=""@1"" D S^LRBLDUC" |  |  |  |  | 
65.5 | LRBLDUC |  | "   S O=$P(LRM | U | 4) | LRX=X I O]"""" | O'=X S Z=""65.54 | 10.4"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDUC |  | "   S O=$P(LRM | U | 5) I O]"""" | O'=X S Z=""65.54 | 10.5"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDUC |  | "   S LRM=$S($D(^LRE(DA(1) | 5 | DA | 11)):^(11) | 1:"""") | Z=0 D S^LRBLDUC" |  |  |  |  | 
65.5 | LRBLDUC |  | "   S O=$P(LRM | U | 4) | LRX=X I O]"""" | O'=X S Z=""65.54 | 11.4"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDUC |  | "   S O=$P(LRM | U | 5) I O]"""" | O'=X S Z=""65.54 | 11.5"" D EN^LRUD" |  |  |  |  | 
65.5 | LRBLDOLD |  | "S LR(""SSN"")=$P($G(^LAB(69.9 | 1 | 8 | 1 | 0)) | U | 5)" |  |  |  |  | 
