
No | FILE NUMBER | FIELD | TYPE | GLOBAL REFERENCE | SET | KILL | Valid | Set | Read | Kill | Comments
---|---|---|---|---|---|---|---|---|---|---|---
1 | 50 | 0.01 | MUMPS | "^PSDRUG(""AUDAP""" | "I '$D(PSGINITF) S ^PSDRUG(""AUDAP"")=$S($D(^PS(59.7 | 1 | 20)):$P(^(20) | ""^"") | 1:"""")" |  | 1 |  |  |  | "Not a standard FileMan cross-reference
2 | 50 | 0.01 | MUMPS | "^PSDRUG(""AIU""_value" | "I $D(X) | $P($G(^PSDRUG(DA | 2)) | ""^"" | 3)]"""" F Y(2)=1:1:$L($P(^PSDRUG(DA | 2) | ""^"" | 3)) S ^PSDRUG(""AIU""_$E($P(^PSDRUG(DA | 2) | ""^"" | 3) | Y(2)) | X | DA)=""""" | "I $D(X) | $P($G(^PSDRUG(DA | 2)) | ""^"" | 3)]"""" F Y(2)=1:1:$L($P(^PSDRUG(DA | 2) | ""^"" | 3)) K ^PSDRUG(""AIU""_$E($P(^PSDRUG(DA | 2) | ""^"" | 3) | Y(2)) | X | DA)" | 1 |  |  |  | "Not a standard FileMan cross-reference
3 | 50 | 3 | MUMPS |  | "I '$D(DIU(0)) N PSSTEST S PSSTEST=$P($G(^PSDRUG(DA | 2)) | ""^"") Q:'PSSTEST  S PSSCROSS=1 D EN1^PSSPOIDT K PSSCROSS Q" | "I '$D(DIU(0)) N PSSTEST S PSSTEST=$P($G(^PSDRUG(DA | 2)) | ""^"") Q:'PSSTEST  S PSSCROSS=1 D EN1^PSSPOIDT K PSSCROSS Q" | 1 |  |  |  | Sets data
4 | 50 | 17.5 | MUMPS |  |  | "K ^PSDRUG(""ACLOZ"" | DA)" | 1 |  |  |  | 
5 | 50 | 20 | MUMPS | "^PSDRUG(""APN"" | " | "S X(1)=$P($G(^PSDRUG(DA | 2)) | ""^"" | 6) I X(1) S X(2)=$P($G(^(""ND"")) | ""^"" | 3) I X(2)]"""" S ^PSDRUG(""APN"" | X(1) | X_""A""_X(2) | DA)=""""" | "S X(1)=$P($G(^PSDRUG(DA | 2)) | ""^"" | 6) I X(1) S X(2)=$P($G(^(""ND"")) | ""^"" | 3) I X(2)]"""" K ^PSDRUG(""APN"" | X(1) | X_""A""_X(2) | DA)" | 1 |  |  |  | 
6 | 50 | 22 | MUMPS | "^PSDRUG(""APN"" | " | "S X(1)=$P($G(^PSDRUG(DA | 2)) | ""^"" | 6) I X(1) S X(2)=$P($G(^(""ND"")) | ""^"") I X(2)]"""" S ^PSDRUG(""APN"" | X(1) | X(2)_""A""_X | DA)=""""" | "S X(1)=$P($G(^PSDRUG(DA | 2)) | ""^"" | 6) I X(1) S X(2)=$P($G(^(""ND"")) | ""^"") I X(2)]"""" K ^PSDRUG(""APN"" | X(1) | X(2)_""A""_X | DA)" | 1 |  |  |  | 
7 | 50 | 28 | MUMPS | "^PSDRUG(""AQ2"" | " | "S:X=1 ^PSDRUG(""AQ2"" | DA)=""""" | "K ^PSDRUG(""AQ2"" | DA)" | 1 |  |  |  | 
8 | 50 | 31 | MUMPS | "^PSDRUG(""NDC"" | " | "S ^PSDRUG(""NDC"" | $$RJ^XLFSTR($P(X | ""-"") | 6 | 0)_$$RJ^XLFSTR($P(X | ""-"" | 2) | 4 | 0)_$$RJ^XLFSTR($P(X | ""-"" | 3) | 2 | 0) | DA)=""""" | "K ^PSDRUG(""NDC"" | $$RJ^XLFSTR($P(X | ""-"") | 6 | 0)_$$RJ^XLFSTR($P(X | ""-"" | 2) | 4 | 0)_$$RJ^XLFSTR($P(X | ""-"" | 3) | 2 | 0) | DA)" | 1 |  |  |  | 
9 | 50 | 51 | MUMPS | "^PS(50.7 | " | "I '$D(DIU(0)) N PSSTEST S PSSTEST=$P($G(^PSDRUG(DA | 2)) | ""^"") Q:'PSSTEST  S PSSCROSS=1 D EN1^PSSPOIDT K PSSCROSS Q" | "I '$D(DIU(0)) N PSSTEST S PSSTEST=$P($G(^PSDRUG(DA | 2)) | ""^"") Q:'PSSTEST  S PSSCROSS=1 D EN1^PSSPOIDT K PSSCROSS Q" | 1 |  |  |  | 
10 | 50 | 63 | MUMPS | "^PSDRUG(""AIU""_value | " | "S Y(1)=$P(^PSDRUG(DA | 0) | ""^"") I Y(1)]"""" F Y(2)=1:1:$L(X) S ^PSDRUG(""AIU""_$E(X | Y(2)) | Y(1) | DA)=""""" | "S Y(1)=$P(^PSDRUG(DA | 0) | ""^"") I Y(1)]"""" F Y(2)=1:1:$L(X) K ^PSDRUG(""AIU""_$E(X | Y(2)) | Y(1) | DA)" | 1 |  |  |  | 
11 | 50 | 64 | MUMPS | "^PSDRUG(""APN"" | " | "S X(1)=$G(^PSDRUG(DA | ""ND"")) I $P(X(1) | ""^"")]"""" | $P(X(1) | ""^"" | 3)]"""" S ^PSDRUG(""APN"" | X | $P(X(1) | ""^"")_""A""_$P(X(1) | ""^"" | 3) | DA)=""""" | "S X(1)=$G(^PSDRUG(DA | ""ND"")) I $P(X(1) | ""^"")]"""" | $P(X(1) | ""^"" | 3)]"""" K ^PSDRUG(""APN"" | X | $P(X(1) | ""^"")_""A""_$P(X(1) | ""^"" | 3) | DA)" | 1 |  |  |  | 
12 | 50 | 100 | MUMPS | "^PSDRUG(DA | ""I"" | " | "S ^PSDRUG(DA | ""I"")=X" | "K ^PSDRUG(DA | ""I"")" | 1 |  |  |  | "This kills the entire ""I"" node if the inactive date is deleted instead of leaving the ""I"" node with a blank field."
13 | 50 | 100 | MUMPS | "^PS(50.7 | " | "I '$D(DIU(0)) N PSSTEST S PSSTEST=$P($G(^PSDRUG(DA | 2)) | ""^"") Q:'PSSTEST  S PSSCROSS=1 D EN1^PSSPOIDT K PSSCROSS Q" | "I '$D(DIU(0)) N PSSTEST S PSSTEST=$P($G(^PSDRUG(DA | 2)) | ""^"") Q:'PSSTEST  S PSSCROSS=1 D EN1^PSSPOIDT K PSSCROSS Q" | 1 |  |  |  | Direct setting of data in routine
14 | 50 | 213 | MUMPS | "^PSDRUG(""AQ"" | " | "S:X=1 ^PSDRUG(""AQ"" | DA)=""""" | "K ^PSDRUG(""AQ"" | DA)" | 1 |  |  |  | 
15 | 50 | 213 | MUMPS | "^PSDRUG(DA | 4 | " | "S TMP=X N X S X=""PSXREF"" X ^%ZOSF(""TEST"") Q:'$T  S X=TMP K TMP D ACT^PSXREF" |  | 1 |  |  |  | Direct setting of data in routine
16 | 50 | 901 | MUMPS | "^PSDRUG(DA | ""DOS1"" | " | D SETS^PSSDOSED | D KILLS^PSSDOSED | 1 |  |  |  | Direct setting of data in routine
17 | 50.0212 | 1 | MUMPS |  | "S ^PSDRUG(DA(1) | 212 | ""AC"" | +^PSDRUG(DA(1) | 212 | DA | 0) | X | DA)=""""" | "K ^PSDRUG(DA(1) | 212 | ""AC"" | +^PSDRUG(DA(1) | 212 | DA | 0) | X | DA)" | 1 |  |  |  | 
18 | 50.065 | 0.01 | MUMPS | "^PSDRUG(""AFA"" | " | "S ^PSDRUG(""AFA"" | X | DA(1))=""""" | "K ^PSDRUG(""AFA"" | X | DA(1))" | 1 |  |  |  | 
19 | 50.0903 | 0.01 | MUMPS | "^PSDRUG(DA(1) | ""DOS1"" | " | D SET^PSSDOSED | D KILL^PSSDOSED | 1 |  |  |  | Direct setting of data in routine
20 | 50.21 | 1 | MUMPS | "^PS(50.2 | ""AD"" | " | "S ^PS(50.2 | ""AD"" | DA(1) | X)=""""" | "K ^PS(50.2 | ""AD"" | DA(1) | X)" | 1 |  |  |  | "Normal cross-reference format would be $E(X | 1 | 30) | DA(1) | DA)"
21 | 50.31 | 0.01 | MUMPS | "^PS(50.3 | DA(1) | 1 | ""AFI"" | " | "S X(1)=$G(^PS(50.3 | DA(1) | 1 | DA | 0)) | ^PS(50.3 | DA(1) | 1 | ""AFI"" | X)='$P(X(1) | ""^"" | 2)_$S($P(X(1) | ""^"" | 3):""^""_$P(X(1) | ""^"" | 3) | 1:"""")" | "K ^PS(50.3 | DA(1) | 1 | ""AFI"" | X)" | 1 |  |  |  | 
22 | 50.31 | 0.01 | MUMPS | "^PS(50.3 | ""AIU""_value | " | "S X(1)=$P($G(^PS(50.3 | DA(1) | 0)) | ""^"") I X(1)]"""" S ^PS(50.3 | ""AIU""_X | X(1) | DA(1))=""""" | "S X(1)=$P($G(^PS(50.3 | DA(1) | 0)) | ""^"") I X(1)]"""" K ^PS(50.3 | ""AIU""_X | X(1) | DA(1))" | 1 |  |  |  | 
23 | 50.416 | 0.01 | MUMPS |  | "I $P(^PS(50.416 | DA | 0) | ""^"" | 2)]"""" S ^PS(50.416 | ""APS"" | $P(^PS(50.416 | DA | 0) | ""^"" | 2) | DA)=""""" | "I $P(^PS(50.416 | DA | 0) | ""^"" | 2)]"""" K ^PS(50.416 | ""APS"" | $P(^PS(50.416 | DA | 0) | ""^"" | 2) | DA)" | 1 |  |  |  | 
24 | 50.4161 | 0.01 | MUMPS | "^PS(50.416 | ""APD"" | " | "S ^PS(50.416 | ""APD"" | X | $S(+$P(^PS(50.416 | DA(1) | 0) | ""^"" | 2):+$P(^(0) | ""^"" | 2) | 1:DA(1)))=""""" | "K ^PS(50.416 | ""APD"" | X | $S(+$P(^PS(50.416 | DA(1) | 0) | ""^"" | 2):+$P(^(0) | ""^"" | 2) | 1:DA(1)))" | 1 |  |  |  | 
25 | 50.6 | 1 | MUMPS | "^PSNDF(50.68 | ^PSNDF(50.67 | " | D GENER^PSNXREF | D KGENER^PSNXREF | 1 |  |  |  | Direct setting of data into two separate files
26 | 50.605 | 1 | MUMPS | "^PS(50.605 | ""C"" | " | "S ^PS(50.605 | ""C"" | $E(X | 1 | 64) | DA)=""""" | "K ^PS(50.605 | ""C"" | $E(X | 1 | 64) | DA)" | 1 |  |  |  | "Normal size is $E(X | 1 | 30)"
27 | 50.6068 | 0.01 | MUMPS | "^PS(50.606 | ""ACON""_value | " | "N PSSAP | PSSAPL S PSSAP=$P($G(^PS(50.606 | DA(1) | ""UNIT"" | DA | 0)) | ""^"" | 2) I PSSAP'="""" F PSSAPL=1:1:$L(PSSAP) S ^PS(50.606 | ""ACON""_$E(PSSAP | PSSAPL) | DA(1) | +$G(X))=""""" | "N PSSAPX | PSSAPXL S PSSAPX=$P($G(^PS(50.606 | DA(1) | ""UNIT"" | DA | 0)) | ""^"" | 2) I PSSAPX'="""" F PSSAPXL=1:1:$L(PSSAPX) K ^PS(50.606 | ""ACON""_$E(PSSAPX | PSSAPXL) | DA(1) | +$G(X))" | 1 |  |  |  | 
28 | 50.6068 | 1 | MUMPS | "^PS(50.606 | ""ACON""_value | " | "N PSSAU F PSSAU=1:1:$L(X) S ^PS(50.606 | ""ACON""_$E(X | PSSAU) | DA(1) | +$P($G(^PS(50.606 | DA(1) | ""UNIT"" | DA | 0)) | ""^""))=""""" | "N PSSAUP F PSSAUP=1:1:$L(X) K ^PS(50.606 | ""ACON""_$E(X | PSSAUP) | DA(1) | +$P($G(^PS(50.606 | DA(1) | ""UNIT"" | DA | 0)) | ""^""))" | 1 |  |  |  | 
29 | 50.6069 | 0.01 | MUMPS | "^PS(50.606 | ""ADUP""_value | " | "N PSSDUP | PSSDUPL S PSSDUP=$P($G(^PS(50.606 | DA(1) | ""DUPD"" | DA | 0)) | ""^"" | 2) I PSSDUP'="""" F PSSDUPL=1:1:$L(PSSDUP) S ^PS(50.606 | ""ADUP""_$E(PSSDUP | PSSDUPL) | DA(1) | $G(X))=""""" | "N PSSDXP | PSSDXPL S PSSDXP=$P($G(^PS(50.606 | DA(1) | ""DUPD"" | DA | 0)) | ""^"" | 2) I PSSDXP'="""" F PSSDXPL=1:1:$L(PSSDXP) K ^PS(50.606 | ""ADUP""_$E(PSSDXP | PSSDXPL) | DA(1) | $G(X))" | 1 |  |  |  | 
30 | 50.6069 | 1 | MUMPS | "^PS(50.606 | ""ADUP""_value | " | "N PSSDP F PSSDP=1:1:$L(X) S ^PS(50.606 | ""ADUP""_$E(X | PSSDP) | DA(1) | $P($G(^PS(50.606 | DA(1) | ""DUPD"" | DA | 0)) | ""^""))=""""" | "N PSSDPK F PSSDPK=1:1:$L(X) K ^PS(50.606 | ""ADUP""_$E(X | PSSDPK) | DA(1) | $P($G(^PS(50.606 | DA(1) | ""DUPD"" | DA | 0)) | ""^""))" | 1 |  |  |  | 
31 | 50.67 | 5 | MUMPS | "^PSNDF(50.68 | ""ANDC"" | " | "S ^PSNDF(50.68 | ""ANDC"" | X | DA)=""""" | "K ^PSNDF(50.68 | ""ANDC"" | X | DA)" | 1 |  |  |  | 
32 | 50.68 | 0.05 | MUMPS | "^PSNDF(50.6 | ""APRO"" | " | "S ^PSNDF(50.6 | ""APRO"" | X | DA)=""""" | "K ^PSNDF(50.6 | ""APRO"" | X | DA)" | 1 |  |  |  | 
33 | 50.68 | 0.05 | MUMPS | "^PS(50.416 | " | D ING2^PSNXREF | D KING2^PSNXREF | 1 |  |  |  | Direct setting of data in routine
34 | 50.68 | 21 | MUMPS | "^PSNDF(50.7 | " | D PROD^PSNXREF | D KPROD^PSNXREF | 1 |  |  |  | Direct setting of data in routine
35 | 50.6814 | 0.01 | MUMPS | "^PS(50.416 | " | D ING^PSNXREF | D KING^PSNXREF | 1 |  |  |  | Direct setting of data in routine
36 | 50.7 | 0.01 | MUMPS | "^PS(50.7 | ""B"" | " | "S ^PS(50.7 | ""B"" | $E(X | 1 | 40) | DA)=""""" | "K ^PS(50.7 | ""B"" | $E(X | 1 | 40) | DA)" | 1 |  |  |  | "Normal size is $E(X | 1 | 30)"
37 | 50.7 | 0.02 | MUMPS | "^PS(50.7 | ""ADF"" | " | "S ^PS(50.7 | ""ADF"" | $P($G(^PS(50.7 | DA | 0)) | ""^"") | X | DA)=""""" | "K ^PS(50.7 | ""ADF"" | $P($G(^PS(50.7 | DA | 0)) | ""^"") | X | DA)" | 1 |  |  |  | 
38 | 50.7 | 0.04 | MUMPS | "^PS(50.7 | " | "I '$D(DIU(0)) N PSSTEST S PSSTEST=DA | PSSCROSS=1 D EN1^PSSPOIDT K PSSCROSS Q" | "I '$D(DIU(0)) N PSSTEST S PSSTEST=DA | PSSCROSS=1 D EN1^PSSPOIDT K PSSCROSS Q" | 1 |  |  |  | 
39 | 50.72 | 0.01 | MUMPS | "^PS(50.7 | " | "I '$D(DIU(0)) | '$G(PSCREATE) N PSSTEST S PSSTEST=DA(1) | PSSCROSS=1 | ZTIO="""" | ZTDTH=$H | ZTDESC=""Orderable Item Update"" | ZTRTN=""EN1^PSSPOIDT"" | ZTSAVE(""PSSCROSS"")="""" | ZTSAVE(""PSSTEST"")="""" D ^%ZTLOAD K PSSCROSS Q" | "I '$D(DIU(0)) | '$G(PSCREATE) N PSSTEST S PSSTEST=DA(1) | PSSCROSS=1 | ZTIO="""" | ZTDTH=$H | ZTDESC=""Orderable Item Update"" | ZTRTN=""EN1^PSSPOIDT"" | ZTSAVE(""PSSCROSS"")="""" | ZTSAVE(""PSSTEST"")="""" D ^%ZTLOAD K PSSCROSS Q" | 1 |  |  |  | 
40 | 50.76 | 0.01 | MUMPS | "^PS(50.7 | " | D ASKSYN^PSSPOIMP | I | 1 |  |  |  | Contains a prompt
41 | 50.8 | 0.01 | MUMPS | "^PS(50.8 | ""AIVC"" | " | "S ^PS(50.8 | ""AIVC"")=$S($D(^PS(59.7 | 1 | 20)):$P(^(20) | ""^"") | 1:"""")" |  | 1 |  |  |  | 
42 | 50.805 | 0.01 | MUMPS | "^PS(50.8 | DA(2) | 2 | DA(1) | 2 | ""AC"" | " | "I '$D(PSIVV) | $D(^PS(50.8)) D ^PSIVXREF Q" |  | 1 |  |  |  | 
43 | 51 | 0.01 | MUMPS | "^PS(51 | ""AI"" | " | "I $P(^PS(51 | DA | 0) | ""^"" | 4) S ^PS(51 | ""AI"" | X | DA)=""""" | "I $P(^PS(51 | DA | 0) | ""^"" | 4) K ^PS(51 | ""AI"" | X | DA)" | 1 |  |  |  | 
44 | 51 | 0.01 | MUMPS | "^PS(51 | ""A"" | " | "S X1=^PS(51 | DA | 0) | %=$P(X1 | ""^"" | 1) I %'="""" S ^PS(51 | ""A"" | %)=$P(X1 | ""^"" | 2)_""^""_$S($D(^PS(51 | DA | 9)):^(9) | 1:"""")" | "K ^PS(51 | ""A"" | X)" | 1 |  |  |  | 
45 | 51 | 0.5 | MUMPS | "^PS(51 | ""B"" | " | "S:'$D(^PS(51 | ""B"" | $E(X | 1 | 9) | DA)) ^(DA)=1" | "I $D(^PS(51 | ""B"" | $E(X | 1 | 9) | DA)) | ^(DA) K ^(DA)" | 1 |  |  |  | 
46 | 51 | 0.5 | MUMPS | "^PS(51 | ""A"" | " | "S X1=^PS(51 | DA | 0) I X'="""" S ^PS(51 | ""A"" | X)=$P(X1 | ""^"" | 2)_""^""_$S($D(^PS(51 | DA | 9)):^(9) | 1:"""")" | "K ^PS(51 | ""A"" | X)" | 1 |  |  |  | 
47 | 51 | 1 | MUMPS | "^PS(51 | ""A"" | " | "S X1=^PS(51 | DA | 0) | %=$P(X1 | ""^"" | 1) I %'="""" S ^PS(51 | ""A"" | %)=$P(X1 | ""^"" | 2)_""^""_$S($D(^PS(51 | DA | 9)):^(9) | 1:"""")" | "S X1=^PS(51 | DA | 0) | %=$P(X1 | ""^"" | 1) I %'="""" K ^PS(51 | ""A"" | %)" | 1 |  |  |  | 
48 | 51 | 9 | MUMPS | "^PS(51 | ""A"" | " | "S X1=^PS(51 | DA | 0) | %=$P(X1 | ""^"" | 1) I %'="""" S ^PS(51 | ""A"" | %)=$P(X1 | ""^"" | 2)_""^""_$S($D(^PS(51 | DA | 9)):^(9) | 1:"""")" | "S X1=^PS(51 | DA | 0) | %=$P(X1 | ""^"" | 1) I %'="""" K ^PS(51 | ""A"" | %)" | 1 |  |  |  | 
49 | 51 | 30 | MUMPS | "^PS(51 | ""AI"" | " | "I X S ^PS(51 | ""AI"" | $P(^PS(51 | DA | 0) | ""^"") | DA)=""""" | "I X K ^PS(51 | ""AI"" | $P(^PS(51 | DA | 0) | ""^"") | DA)" | 1 |  |  |  | 
50 | 51.1 | 0.01 | MUMPS | "^PS(51.1 | ""AUWD"" | " | "S ^PS(51.1 | ""AUWD"")=$S($D(^PS(59.7 | 1 | 20)):$P(^(20) | ""^"") | 1:"""")" |  | 1 |  |  |  | 
51 | 51.1 | 0.01 | MUMPS | "^PS(51.1 | ""AC"" | " | "I $D(^PS(51.1 | DA | 0)) | $P(^(0) | ""^"" | 4)]"""" S ^PS(51.1 | ""AC"" | $P(^(0) | ""^"" | 4) | X | DA)=""""" | "I $D(^PS(51.1 | DA | 0)) | $P(^(0) | ""^"" | 4)]"""" K ^PS(51.1 | ""AC"" | $P(^(0) | ""^"" | 4) | X | DA)" | 1 |  |  |  | 
52 | 51.1 | 0.01 | MUMPS | "^PS(51.1 | ""AP"" | " | "I $D(^PS(51.1 | DA | 0)) | $P(^(0) | ""^"" | 4)]"""" S ^PS(51.1 | ""AP""_$P(^(0) | ""^"" | 4) | X | DA)=""""" | "I $D(^PS(51.1 | DA | 0)) | $P(^(0) | ""^"" | 4)]"""" K ^PS(51.1 | ""AP""_$P(^(0) | ""^"" | 4) | X | DA)" | 1 |  |  |  | 
53 | 51.1 | 4 | MUMPS | "^PS(51.1 | ""AC"" | " | "I $D(^PS(51.1 | DA | 0)) | $P(^(0) | ""^"")]"""" S ^PS(51.1 | ""AC"" | X | $P(^(0) | ""^"") | DA)=""""" | "I $D(^PS(51.1 | DA | 0)) | $P(^(0) | ""^"")]"""" K ^PS(51.1 | ""AC"" | X | $P(^(0) | ""^"") | DA)" | 1 |  |  |  | 
54 | 51.1 | 4 | MUMPS | "^PS(51.1 | ""AP""_value | " | "S ^PS(51.1 | ""AP""_X | $P(^PS(51.1 | DA | 0) | ""^"") | DA)=""""" | "K ^PS(51.1 | ""AP""_X | $P(^PS(51.1 | DA | 0) | ""^"") | DA)" | 1 |  |  |  | 
55 | 51.15 | 0.01 | MUMPS | "^PS(51.15 | ""AC"" | " | "I $D(^PS(51.15 | DA | 0)) | $P(^(0) | ""^"" | 4)]"""" S ^PS(51.15 | ""AC"" | $P(^(0) | ""^"" | 4) | X | DA)=""""" | "I $D(^PS(51.15 | DA | 0)) | $P(^(0) | ""^"" | 4)]"""" K ^PS(51.15 | ""AC"" | $P(^(0) | ""^"" | 4) | X | DA)" | 1 |  |  |  | 
56 | 51.15 | 0.01 | MUMPS | "^PS(51.1 | ""AP""_value | " | "I $D(^PS(51.15 | DA | 0)) | $P(^(0) | ""^"" | 4)]"""" S ^PS(51.15 | ""AP""_$P(^(0) | ""^"" | 4) | X | DA)=""""" | "I $D(^PS(51.15 | DA | 0)) | $P(^(0) | ""^"" | 4)]"""" K ^PS(51.15 | ""AP""_$P(^(0) | ""^"" | 4) | X | DA)" | 1 |  |  |  | 
57 | 51.15 | 1 | MUMPS | "^PS(51.15 | ""ACP"" | " | "I $D(^PS(51.15 | DA | 0)) | $P(^(0) | ""^"" | 4)]"""" S ^PS(51.15 | ""ACP"" | $P(^(0) | ""^"" | 4) | X | DA)=""""" | "I $D(^PS(51.15 | DA | 0)) | $P(^(0) | ""^"" | 4)]"""" K ^PS(51.15 | ""ACP"" | $P(^(0) | ""^"" | 4) | X | DA)" | 1 |  |  |  | 
58 | 51.15 | 4 | MUMPS | "^PS(51.1 | ""AC"" | " | "I $D(^PS(51.15 | DA | 0)) | $P(^(0) | ""^"")]"""" S ^PS(51.15 | ""AC"" | X | $P(^(0) | ""^"") | DA)=""""" | "I $D(^PS(51.15 | DA | 0)) | $P(^(0) | ""^"")]"""" K ^PS(51.15 | ""AC"" | X | $P(^(0) | ""^"") | DA)" | 1 |  |  |  | 
59 | 51.15 | 4 | MUMPS | "^PS(51.1 | ""AP""_value | " | "I $D(^PS(51.15 | DA | 0)) | $P(^(0) | ""^"")]"""" S ^PS(51.15 | ""AP""_X | $P(^(0) | ""^"") | DA)=""""" | "I $D(^PS(51.15 | DA | 0)) | $P(^(0) | ""^"")]"""" K ^PS(51.15 | ""AP""_X | $P(^(0) | ""^"") | DA)" | 1 |  |  |  | 
60 | 51.2 | 0.01 | MUMPS | "^PS(51.2 | ""AUDC"" | " | "I '$D(PSGINITF) S ^PS(51.2 | ""AUDC"")=$S($D(^PS(59.7 | 1 | 20)):$P(^(20) | ""^"") | 1:"""")" |  | 1 |  |  |  | 
61 | 52 | 6 | MUMPS | "^PSRX(""ADL"" | " | "I X | $P(^PSRX(DA | 2) | ""^"" | 2) S ^PSRX(""ADL"" | $P(^PSRX(DA | 2) | ""^"" | 2) | X | DA)=""""" | "I X | $P(^PSRX(DA | 2) | ""^"" | 2) K ^PSRX(""ADL"" | $P(^PSRX(DA | 2) | ""^"" | 2) | X | DA)" | 1 |  |  |  | 
62 | 52 | 6 | MUMPS |  | "S:'$D(PSOPAR) PSOPAR=$S($D(^PS(59 | $O(^PS(59 | 0)) | 1)):^(1) | 1:"""") S P(7)=$P(^PSRX(DA | 0) | U | 8) | P(5)=$P(^PSRX(DA | 0) | U | 6) | P(2)=$P(^(0) | U | 3) D MAX^PSOHELP K P(2) | P(7) | P(5) S:$P(^PSRX(DA | 0) | U | 9)="""" $P(^(0) | U | 9)=MAX K MIN | MAX | REF" |  | 1 |  |  |  | "Direct setting of data in routine |  WRITEs and"
63 | 52 | 20 | MUMPS | "^PS(52.5 | ""AS"" | ^PS(52.5 | ""APR"" | " | D SAS^PSOSUTL | D KAS^PSOSUTL | 1 |  |  |  | 
64 | 52 | 22 | MUMPS | "^PSRX(""AD"" | " | "S ^PSRX(""AD"" | X | DA | 0)=""""" | "K ^PSRX(""AD"" | X | DA | 0)" | 1 |  |  |  | 
65 | 52 | 22 | MUMPS | "^PS(52.5 | ""C"" | ^PS(52.5 | ""AQ"" | ^PS(52.5 | ""AC"" | " | D SUSFDS^PSOUTLA | D SUSFDK^PSOUTLA | 1 |  |  |  | 
66 | 52 | 22 | MUMPS | "^PSRX(""ADL"" | " | "I X | $P(^PSRX(DA | 0) | ""^"" | 6) S ^PSRX(""ADL"" | X | $P(^PSRX(DA | 0) | ""^"" | 6) | DA)=""""" | "I X | $P(^PSRX(DA | 0) | ""^"" | 6) K ^PSRX(""ADL"" | X | $P(^PSRX(DA | 0) | ""^"" | 6) | DA)" | 1 |  |  |  | 
67 | 52 | 26.1 | MUMPS | "^PS(55 | DFN | ""P"" | ""A"" | " | "I $P($G(^PSRX(DA | ""STA"")) | ""^"")=12 S ^PS(55 | +$P(^PSRX(DA | 0) | ""^"" | 2) | ""P"" | ""A"" | X | DA)="""" K ^PS(55 | +$P(^PSRX(DA | 0) | ""^"" | 2) | ""P"" | ""A"" | $P($G(^PSRX(DA | 2)) | ""^"" | 6) | DA)" | "S ^PS(55 | $P(^PSRX(DA | 0) | ""^"" | 2) | ""P"" | ""A"" | $P(^PSRX(DA | 2) | ""^"" | 6) | DA)="""" K ^PS(55 | $P(^PSRX(DA | 0) | ""^"" | 2) | ""P"" | ""A"" | X | DA)" | 1 |  |  |  | 
68 | 52 | 31 | MUMPS | "^PSRX(""AL"" | " | "S ^PSRX(""AL"" | X | DA | 0)=""""" | "K ^PSRX(""AL"" | X | DA | 0)" | 1 |  |  |  | 
69 | 52 | 32.1 | MUMPS | "^PSRAX(""AJ"" | " | "S ^PSRX(""AJ"" | X | DA | 0)=""""" | "K ^PSRX(""AJ"" | X | DA | 0)" | 1 |  |  |  | 
70 | 52.01 | 3 | MUMPS | "^PSRX(DA(1) | 4 | ""A"" | " | "K:X'=0 ^PSRX(DA(1) | 4 | ""A"" | $P(^PSRX(DA(1) | 4 | DA | 0) | ""^"" | 3) | DA) S:X=0 ^PSRX(DA(1) | 4 | ""A"" | $P(^PSRX(DA(1) | 4 | DA | 0) | ""^"" | 3) | DA)=""""" | "K ^PSRX(DA(1) | 4 | ""A"" | $P(^PSRX(DA(1) | 4 | DA | 0) | ""^"" | 3) | DA)" | 1 |  |  |  | 
71 | 52.01 | 3 | MUMPS | "^PSRX(""AR"" | " | "I X=1 N X S X=""PSXREF"" X ^%ZOSF(""TEST"") Q:'$T  S X=1 D AR^PSXREF" |  | 1 |  |  |  | 
72 | 52.01 | 3 | MUMPS | "^PSRX(""AS"" | " | "I X=0 N X S X=""PSXREF"" X ^%ZOSF(""TEST"") Q:'$T  S X=0 D AS^PSXREF" | "S TMP=X N X S X=""PSXREF"" X ^%ZOSF(""TEST"") Q:'$T  S X=TMP D ASKILL^PSXREF" | 1 |  |  |  | 
73 | 52.1 | 0.01 | MUMPS | "^PS(52.5 | ""C"" | ^PS(52.5 | ""AQ"" | ^PS(52.5 | ""AC"" | " | D S52^PSOUTL | D K52^PSOUTL | 1 |  |  |  | 
74 | 52.1 | 0.01 | MUMPS |  | D SPR^PSOUTL | D KPR^PSOUTL | 1 |  |  |  | 
75 | 52.1 | 8 | MUMPS | "^PS(52.5 | ""AS"" | ^PS(52.5 | ""APR"" | " | D SAS1^PSOSUTL | D KAS1^PSOSUTL | 1 |  |  |  | 
76 | 52.1 | 14 | MUMPS | "^PSRX(""AJ"" | " | "S ^PSRX(""AJ"" | $E(X | 1 | 30) | DA(1) | DA)=""""" | "K ^PSRX(""AJ"" | $E(X | 1 | 30) | DA(1) | DA)" | 1 |  |  |  | 
77 | 52.1 | 17 | MUMPS | "^PSRX(""AL"" | " | "S ^PSRX(""AL"" | $E(X | 1 | 30) | DA(1) | DA)=""""" | "K ^PSRX(""AL"" | $E(X | 1 | 30) | DA(1) | DA)" | 1 |  |  |  | 
78 | 52.11 | 6 | MUMPS | "^PS(52.11 | ""ANAM"" | " | "S ^PS(52.11 | ""ANAM"" | +$P(^PS(52.11 | DA | 0) | ""^"" | 3) | $P(^(1) | ""^"" | 3)_$P(^(1) | ""^"" | 4)_"" ""_$P(^DPT(+$P(^PS(52.11 | DA | 0) | ""^"") | 0) | ""^"") | DA)=""""" | "K ^PS(52.11 | ""ANAM"" | +$P(^PS(52.11 | DA | 0) | ""^"" | 3) | $P(^(1) | ""^"" | 3)_$P(^(1) | ""^"" | 4)_"" ""_$P(^DPT(+$P(^PS(52.11 | DA | 0) | ""^"") | 0) | ""^"") | DA)" | 1 |  |  |  | 
79 | 52.11 | 6 | MUMPS | "^PS(52.11 | ""ATIC"" | " | D ATICSET^PSOBINGO | D ATICKIL^PSOBINGO | 1 |  |  |  | 
80 | 52.11 | 7 | MUMPS | "^PS(52.11 | ""ANAMK"" | " | "S ^PS(52.11 | ""ANAMK"" | DA | +$P(^PS(52.11 | DA | 0) | ""^"" | 3) | $P(^PS(52.11 | DA | 0) | ""^""))=""""" | "K ^PS(52.11 | ""ANAMK"" | DA | +$P(^PS(52.11 | DA | 0) | ""^"" | 3) | $P(^PS(52.11 | DA | 0) | ""^""))" | 1 |  |  |  | 
81 | 52.11 | 8 | MUMPS | "^PS(52.11 | ""BA"" | " | "S ^PS(52.11 | ""BA"" | $E(X | 1 | 30) | DA | $P(^DPT($P(^PS(52.11 | DA | 0) | U) | 0) | U | 9))=""""" | "K ^PS(52.11 | ""BA"" | $E(X | 1 | 30) | DA | $P(^DPT($P(^PS(52.11 | DA | 0) | U) | 0) | U | 9))" | 1 |  |  |  | 
82 | 52.11 | 10 | MUMPS | "^PS(52.11 | ""BI"" | " | "S ^PS(52.11 | ""BI"" | $P(^PS(52.11 | DA | 0) | U) | $P(^PS(52.11 | DA | 1) | U | 3) | DA)=""""" | "K ^PS(52.11 | ""BI"" | $P(^PS(52.11 | DA | 0) | U) | $P(^PS(52.11 | DA | 1) | U | 3) | DA)" | 1 |  |  |  | 
83 | 52.2 | 0.09 | MUMPS | "^PS(52.5 | ""AS"" | ^PS(52.5 | ""APR"" | " | D SAS2^PSOSUTL | D KAS2^PSOSUTL | 1 |  |  |  | 
84 | 52.41 | 1 | MUMPS | "^PS(52.41 | ""PN"" | " | "S ^PS(52.41 | ""PN"" | $P(^DPT($P(^PS(52.41 | DA | 0) | ""^"" | 2) | 0) | ""^"") | DA)=""""" | "K ^PS(52.41 | ""PN"" | $P(^DPT($P(^PS(52.41 | DA | 0) | ""^"" | 2) | 0) | ""^"") | DA)" | 1 |  |  |  | 
85 | 52.41 | 1.1 | MUMPS | "^PS(52.41 | ""HLP"" | " | "S ^PS(52.41 | ""HLP"" | X | $P(^PS(52.41 | DA | 0) | ""^"" | 2) | DA)=""""" | "K ^PS(52.41 | ""HLP"" | X | $P(^PS(52.41 | DA | 0) | ""^"" | 2) | DA)" | 1 |  |  |  | 
86 | 52.41 | 1.1 | MUMPS | "^PS(52.41 | ""ACL"" | " | "I $P(^PS(52.41 | DA | 0) | ""^"" | 3)=""NW""!($P(^(0) | ""^"" | 3)=""RNW"")!($P(^(0) | ""^"" | 3)=""RF"") | $P(^(0) | ""^"" | 12) S ^PS(52.41 | ""ACL"" | X | $P(^PS(52.41 | DA | 0) | ""^"" | 12) | DA)=""""" | "I $P(^PS(52.41 | DA | 0) | ""^"" | 12) K ^PS(52.41 | ""ACL"" | X | $P(^PS(52.41 | DA | 0) | ""^"" | 12) | DA)" | 1 |  |  |  | 
87 | 52.41 | 2 | MUMPS | "^PS(52.41 | ""AOR"" | " | "I X=""NW""!(X=""RNW"")!(X=""RF"") | $P($G(^PS(52.41 | DA | ""INI"")) | ""^"") S ^PS(52.41 | ""AOR"" | $P(^PS(52.41 | DA | 0) | ""^"" | 2) | $P(^(""INI"") | ""^"") | DA)=""""" | "I $P($G(^PS(52.41 | DA | ""INI"")) | ""^"") K ^PS(52.41 | ""AOR"" | $P(^PS(52.41 | DA | 0) | ""^"" | 2) | $P(^(""INI"") | ""^"") | DA)" | 1 |  |  |  | 
88 | 52.41 | 15 | MUMPS | "^PS(52.41 | ""AD"" | " | "I $P(^PS(52.41 | DA | 0) | ""^"" | 3)=""NW""!($P(^(0) | ""^"" | 3)=""RNW"")!($P(^(0) | ""^"" | 3)=""RF"") S ^PS(52.41 | ""AD"" | X | $P(^PS(52.41 | DA | ""INI"") | ""^"") | DA)=""""" | "K ^PS(52.41 | ""AD"" | X | $P(^PS(52.41 | DA | ""INI"") | ""^"") | DA)" | 1 |  |  |  | 
89 | 52.41 | 15 | MUMPS | "^PS(52.41 | ""ACL"" | " | "I $P(^PS(52.41 | DA | 0) | ""^"" | 3)=""NW""!($P(^(0) | ""^"" | 3)=""RNW"")!($P(^(0) | ""^"" | 3)=""RF"") | $P(^(0) | ""^"" | 13) S ^PS(52.41 | ""ACL"" | $P(^PS(52.41 | DA | 0) | ""^"" | 13) | X | DA)=""""" | "I $P(^PS(52.41 | DA | 0) | ""^"" | 13) K ^PS(52.41 | ""ACL"" | $P(^PS(52.41 | DA | 0) | ""^"" | 13) | X | DA)" | 1 |  |  |  | 
90 | 52.41 | 19 | MUMPS | "^PS(52.41 | ""AC"" | " | "S ^PS(52.41 | ""AC"" | $P(^PS(52.41 | DA | 0) | ""^"" | 2) | X | DA)=""""" | "K ^PS(52.41 | ""AC"" | $P(^PS(52.41 | DA | 0) | ""^"" | 2) | X | DA)" | 1 |  |  |  | 
91 | 52.41 | 22.1 | MUMPS | "^PS(52.41 | ""AOR"" | " | ":$P(^PS(52.41 | DA | 0) | ""^"" | 3)=""NW""!($P(^(0) | ""^"" | 3)=""RNW"")!($P(^(0) | ""^"" | 3)=""RF"") ^PS(52.41 | ""AOR"" | $P(^PS(52.41 | DA | 0) | ""^"" | 2) | X | DA)=""""" | "K ^PS(52.41 | ""AQ"" | X | DA)" | 1 |  |  |  | 
92 | 52.41 | 25 | MUMPS | "^PS(52.41 | ""AP"" | " | "S ^PS(52.41 | ""AP"" | $P(^PS(52.41 | DA | 0) | ""^"" | 2) | X | DA)=""""" | "K ^PS(52.41 | ""AP"" | $P(^PS(52.41 | DA | 0) | ""^"" | 2) | X | DA)" | 1 |  |  |  | 
93 | 52.41 | 100 | MUMPS | "^PS(52.41 | ""AOR"" | " | "S:$P(^PS(52.41 | DA | 0) | ""^"" | 3)=""NW""!($P(^(0) | ""^"" | 3)=""RNW"")!($P(^(0) | ""^"" | 3)=""RF"") ^PS(52.41 | ""AOR"" | $P(^PS(52.41 | DA | 0) | ""^"" | 2) | X | DA)=""""" | "K ^PS(52.41 | ""AOR"" | $P(^PS(52.41 | DA | 0) | ""^"" | 2) | X | DA)" | 1 |  |  |  | 
94 | 52.41 | 100 | MUMPS | "^PS(52.41 | ""AD"" | " | "I $P(^PS(52.41 | DA | 0) | ""^"" | 3)=""NW""!($P(^(0) | ""^"" | 3)=""RNW"")!($P(^(0) | ""^"" | 3)=""RF"") S ^PS(52.41 | ""AD"" | $P(^PS(52.41 | DA | 0) | ""^"" | 12) | X | DA)=""""" | "K ^PS(52.41 | ""AD"" | $P(^PS(52.41 | DA | 0) | ""^"" | 12) | X | DA)" | 1 |  |  |  | 
95 | 52.43 | 5 | MUMPS | "^PS(52.43 | ""AD"" | " | "S ^PS(52.43 | ""AD"" | X | DA)=""""" | "K ^PS(52.43 | ""AD"" | X | DA)" | 1 |  |  |  | 
96 | 52.5 | 0.01 | MUMPS | "^PS(52.5 | " | D SET^PSOSUTL | D KILL^PSOSUTL | 1 |  |  |  | 
97 | 52.5 | 0.02 | MUMPS | "^PS(52.5 | ""AC"" | " | "K:+$G(^(""P""))=1 ^PS(52.5 | ""AC"" | +$P(^PS(52.5 | DA | 0) | ""^"" | 3) | X | DA) S:+$G(^PS(52.5 | DA | ""P""))'=1&($P($G(^PS(52.5 | DA | 0)) | ""^"" | 3))&($P($G(^PS(52.5 | DA | 0)) | ""^"" | 7)="""") ^PS(52.5 | ""AC"" | $P(^PS(52.5 | DA | 0) | ""^"" | 3) | X | DA)=""""" | "K ^PS(52.5 | ""AC"" | +$P(^PS(52.5 | DA | 0) | ""^"" | 3) | X | DA)" | 1 |  |  |  | 
98 | 52.5 | 0.03 | MUMPS |  | "K:+$G(^(""P""))=1 ^PS(52.5 | ""AC"" | X | +$P($G(^PS(52.5 | DA | 0)) | ""^"" | 2) | DA) S:+$G(^PS(52.5 | DA | ""P""))'=1&($P($G(^PS(52.5 | DA | 0)) | ""^"" | 2))&($P($G(^PS(52.5 | DA | 0)) | ""^"" | 7)="""") ^PS(52.5 | ""AC"" | X | +$P($G(^PS(52.5 | DA | 0)) | ""^"" | 2) | DA)=""""" | "K ^PS(52.5 | ""AC"" | X | +$P(^PS(52.5 | DA | 0) | ""^"" | 2) | DA)" | 1 |  |  |  | 
99 | 52.5 | 0.06 | MUMPS | "^PS(52.5 | ""AS"" | ^PS(52.5 | ""APR"" | " | D SDIVAS^PSOSUTL1 | D KDIVAS^PSOSUTL1 | 1 |  |  |  | 
100 | 52.5 | 0.06 | MUMPS | ^PSRX( | D SDIV^PSOSUTL |  | 1 |  |  |  | 
101 | 52.5 | 2 | MUMPS | "^PS(52.5 | ""AC"" | " | "K:X=1 ^PS(52.5 | ""AC"" | $P(^PS(52.5 | DA | 0) | ""^"" | 3) | $P(^PS(52.5 | DA | 0) | ""^"" | 2) | DA) S:X'=1&($P($G(^PS(52.5 | DA | 0)) | ""^"" | 7)="""") ^PS(52.5 | ""AC"" | $P(^PS(52.5 | DA | 0) | ""^"" | 3) | $P(^PS(52.5 | DA | 0) | ""^"" | 2) | DA)=""""" | "K ^PS(52.5 | ""AC"" | $P(^PS(52.5 | DA | 0) | ""^"" | 3) | $P(^(0) | ""^"" | 2) | DA)" | 1 |  |  |  | 
102 | 52.5 | 2 | MUMPS | "^PS(52.5 | ""ADL"" | " | D SADL^PSOSUTL1 | D KADL^PSOSUTL1 | 1 |  |  |  | 
103 | 52.5 | 3 | MUMPS | "^PS(52.5 | ""AQ"" | " | "S:X=""Q"" ^PS(52.5 | ""AQ"" | $P(^PS(52.5 | DA | 0) | ""^"" | 2) | $P(^PS(52.5 | DA | 0) | ""^"" | 3) | DA)="""" K:X=""Q"" ^PS(52.5 | ""AC"" | +$P(^PS(52.5 | DA | 0) | ""^"" | 3) | +$P(^PS(52.5 | DA | 0) | ""^"" | 2) | DA)" | "K ^PS(52.5 | ""AQ"" | $P(^PS(52.5 | DA | 0) | ""^"" | 2) | $P(^PS(52.5 | DA | 0) | ""^"" | 3) | DA)" | 1 |  |  |  | 
104 | 52.5 | 3 | MUMPS | "^PS(52.5 | ""AX"" | " | "S:X=""X"" ^PS(52.5 | ""AX"" | $P(^PS(52.5 | DA | 0) | ""^"" | 2) | $P(^PS(52.5 | DA | 0) | ""^"" | 3) | DA)="""" K:X=""X"" ^PS(52.5 | ""AC"" | +$P(^PS(52.5 | DA | 0) | ""^"" | 3) | +$P(^PS(52.5 | DA | 0) | ""^"" | 2) | DA)" | "K ^PS(52.5 | ""AX"" | $P(^PS(52.5 | DA | 0) | ""^"" | 2) | $P(^PS(52.5 | DA | 0) | ""^"" | 3) | DA)" | 1 |  |  |  | 
105 | 52.5 | 3 | MUMPS | "^PS(52.5 | ""AL"" | " | "S:X=""L"" ^PS(52.5 | ""AL"" | $P(^PS(52.5 | DA | 0) | ""^"" | 2) | $P(^PS(52.5 | DA | 0) | ""^"" | 3) | DA)="""" K:X=""L"" ^PS(52.5 | ""AC"" | +$P(^PS(52.5 | DA | 0) | ""^"" | 3) | +$P(^PS(52.5 | DA | 0) | ""^"" | 2) | DA)" | "K ^PS(52.5 | ""AL"" | $P(^PS(52.5 | DA | 0) | ""^"" | 2) | $P(^PS(52.5 | DA | 0) | ""^"" | 3) | DA)" | 1 |  |  |  | 
106 | 52.5 | 3 | MUMPS | "^PS(52.5 | ""AP"" | " | "S:X=""P"" ^PS(52.5 | ""AP"" | $P(^PS(52.5 | DA | 0) | ""^"" | 2) | $P(^PS(52.5 | DA | 0) | ""^"" | 3) | DA)="""" K:X=""P"" ^PS(52.5 | ""AC"" | +$P(^PS(52.5 | DA | 0) | ""^"" | 3) | +$P(^PS(52.5 | DA | 0) | ""^"" | 2) | DA)" | "K ^PS(52.5 | ""AP"" | $P(^PS(52.5 | DA | 0) | ""^"" | 2) | $P(^PS(52.5 | DA | 0) | ""^"" | 3) | DA)" | 1 |  |  |  | 
107 | 52.5 | 3 | MUMPS | "^PS(52.5 | ""AG"" | " | "S:$G(X)=""P""!($G(X)=""Q"") ^PS(52.5 | ""AG"" | +$P(^PS(52.5 | DA | 0) | ""^"" | 3) | DA)="""" K:$G(X)=""Q""!($G(X)=""P"") ^PS(52.5 | ""AC"" | +$P(^PS(52.5 | DA | 0) | ""^"" | 3) | +$P(^PS(52.5 | DA | 0) | ""^"" | 2) | DA)" | "K ^PS(52.5 | ""AG"" | $P(^PS(52.5 | DA | 0) | ""^"" | 3) | DA)" | 1 |  |  |  | 
108 | 52.5 | 4 | MUMPS | "^PS(52.5 | ""AS"" | ^PS(52.5 | ""APR"" | " | D SPDTAS^PSOSUTL1 | D KPDTAS^PSOSUTL1 | 1 |  |  |  | 
109 | 52.5 | 5 | MUMPS | "^PS(52.5 | ""AS"" | ^PS(52.5 | ""APR"" | " | D SPBYAS^PSOSUTL1 | D KPBYAS^PSOSUTL1 | 1 |  |  |  | 
110 | 52.5 | 7 | MUMPS | "^PS(52.5 | ""AS"" | ^PS(52.5 | ""APR"" | " | D SSEQAS^PSOSUTL1 | D KSEQAS^PSOSUTL1 | 1 |  |  |  | 
111 | 52.51 | 3 | MUMPS | "^PS(52.51 | ""AS"" | " | D SDATE^PSOEXREF | D KDATE^PSOEXREF | 1 |  |  |  | 
112 | 52.51 | 4 | MUMPS | "^PS(52.51 | ""AS"" | " | D SPER^PSOEXREF | D KPER^PSOEXREF | 1 |  |  |  | 
113 | 52.51 | 10 | MUMPS | "^PS(52.51 | ""AM"" | " | D SMES^PSOEXREF | D KMES^PSOEXREF | 1 |  |  |  | 
114 | 52.51 | 15 | MUMPS | "^PS(52.51 | ""AS"" | " | D SDIV^PSOEXREF | D KDIV^PSOEXREF | 1 |  |  |  | 
115 | 52.51 | 15 | MUMPS | "^PS(52.51 | ""AM"" | " | D SDIVM^PSOEXREF | D KDIVM^PSOEXREF | 1 |  |  |  | 
116 | 52.6 | 1 | MUMPS | "^PSDRUG(""IU"" | ^PSDRUG(""AIU""_value | " | "I $P($G(^PSDRUG(X | 2)) | ""^"" | 3)'[""I"" S PSIUDA=X | PSIUX=""I"" D ENS^PSSGIU" | "I '$D(^PS(52.7 | ""AC"" | X)) S XX=$O(^PS(52.6 | ""AC"" | X | 0)) S:XX=DA XX=$O(^(XX)) I XX | $P($G(^PSDRUG(X | 2)) | ""^"" | 3)[""I"" S PSIUDA=X | PSIUX=""I"" D END^PSSGIU" | 1 |  |  |  | 
117 | 52.6 | 1 | MUMPS |  | D S526^PSSPOID1 | D K526^PSSPOID1 | 1 |  |  |  | 
118 | 52.6 | 12 | MUMPS |  | "I '$D(DIU(0)) N PSSTEST S PSSTEST=$P($G(^PS(52.6 | DA | 0)) | ""^"" | 11) Q:'PSSTEST  S PSSCROSS=1 D EN1^PSSPOIDT K PSSCROSS Q" | "I '$D(DIU(0)) N PSSTEST S PSSTEST=$P($G(^PS(52.6 | DA | 0)) | ""^"" | 11) Q:'PSSTEST  S PSSCROSS=1 D EN1^PSSPOIDT K PSSCROSS Q" | 1 |  |  |  | 
119 | 52.6 | 17 | MUMPS |  | "I '$D(DIU(0)) N PSSTEST S PSSTEST=$P($G(^PS(52.6 | DA | 0)) | ""^"" | 11) Q:'PSSTEST  S PSSCROSS=1 D EN1^PSSPOIDT K PSSCROSS Q" | "I '$D(DIU(0)) N PSSTEST S PSSTEST=$P($G(^PS(52.6 | DA | 0)) | ""^"" | 11) Q:'PSSTEST  S PSSCROSS=1 D EN1^PSSPOIDT K PSSCROSS Q" | 1 |  |  |  | 
120 | 52.7 | 1 | MUMPS | "^PSDRUG(""IU"" | ^PSDRUG(""AIU""_value | " | "I $P($G(^PSDRUG(X | 2)) | ""^"" | 3)'[""I"" S PSIUDA=X | PSIUX=""I"" D ENS^PSSGIU K PSIUDA | PSIUX" | "I '$D(^PS(52.6 | ""AC"" | X)) S XX=$O(^PS(52.7 | ""AC"" | X | 0)) S:XX=DA XX=$O(^(XX)) I XX | $P($G(^PSDRUG(X | 2)) | ""^"" | 3)[""I"" S PSIUDA=X | PSIUX=""I"" D END^PSSGIU K PSIUDA | PSIUX" | 1 |  |  |  | 
121 | 52.7 | 1 | MUMPS | "^PSDRUG(""A527""
^PS(52.7 | ""AOI"" | " | D S527^PSSPOID1 | D K527^PSSPOID1 | 1 |  |  |  | 
122 | 52.7 | 8 | MUMPS |  | "I '$D(DIU(0)) N PSSTEST S PSSTEST=$P($G(^PS(52.7 | DA | 0)) | ""^"" | 11) Q:'PSSTEST  S PSSCROSS=1 D EN1^PSSPOIDT K PSSCROSS Q" | "I '$D(DIU(0)) N PSSTEST S PSSTEST=$P($G(^PS(52.7 | DA | 0)) | ""^"" | 11) Q:'PSSTEST  S PSSCROSS=1 D EN1^PSSPOIDT K PSSCROSS Q" | 1 |  |  |  | 
123 | 52.7 | 17 | MUMPS |  | "I '$D(DIU(0)) N PSSTEST S PSSTEST=$P($G(^PS(52.7 | DA | 0)) | ""^"" | 11) Q:'PSSTEST  S PSSCROSS=1 D EN1^PSSPOIDT K PSSCROSS Q" | "I '$D(DIU(0)) N PSSTEST S PSSTEST=$P($G(^PS(52.7 | DA | 0)) | ""^"" | 11) Q:'PSSTEST  S PSSCROSS=1 D EN1^PSSPOIDT K PSSCROSS Q" | 1 |  |  |  | 
124 | 52.8 | 0.01 | MUMPS | "^PSOARC(""B"" | " | "S ^PSOARC(""B"" | $P(^DPT($P(^PSRX(X | 0) | U | 2) | 0) | U | 1) | $P(^(0) | U | 9) | DA)=""""" | "K ^PSOARC(""B"" | $P(^DPT($P(^PSRX(X | 0) | U | 2) | 0) | U | 1) | $P(^(0) | U | 9) | DA)" | 1 |  |  |  | 
125 | 52.91 | 2 | MUMPS | "^PS(655 | " | D RXPAT^PSOTPCAN |  | 1 |  |  |  | 
126 | 53.1 | 0.5 | MUMPS | "^PS(53.1 | ""AS"" | ^PS(53.1 | ""AC"" | ^PS(53.1 | ""AV"" | ^PS(53.1 | ""AOD"" | " | "S XX=X | X=""PSGAXR"" X ^%ZOSF(""TEST"") I  S X=XX D ENNPS^PSGAXR" | "S XX=X | X=""PSGAXR"" X ^%ZOSF(""TEST"") I  S X=XX D ENNPK^PSGAXR" | 1 |  |  |  | 
127 | 53.1 | 16 | MUMPS | "^PS(53.1 | ""AV"" | " | "S XX=X | X=""PSGAXR"" X ^%ZOSF(""TEST"") I  S X=XX D ENNACK^PSGAXR" | "S XX=X | X=""PSGAXR"" X ^%ZOSF(""TEST"") I  S X=XX D ENNACKK^PSGAXR" | 1 |  |  |  | 
128 | 53.1 | 28 | MUMPS | "^PS(53.1 | ""AS"" | ^PS(53.1 | ""AC"" | ^PS(53.1 | ""AD"" | ^PS(53.1 | ""AOD"" | " | "S XX=X | X=""PSGAXR"" X ^%ZOSF(""TEST"") I  S X=XX D ENSS^PSGAXR" | "S XX=X | X=""PSGAXR"" X ^%ZOSF(""TEST"") I  S X=XX D ENSK^PSGAXR" | 1 |  |  |  | 
129 | 53.1 | 101 | MUMPS | "^PS(53.1 | ""D"" | ^PS(53.1 | ""AOD"" | " | D ENNDS^PSGAXR | D ENNDK^PSGAXR | 1 |  |  |  | 
130 | 53.4 | 1 | MUMPS | "^PS(53.4 | ""AUD"" | " | "I ^PS(53.4 | DA | 0) S ^PS(53.4 | ""AUD"" | +^(0) | +X | DA)=""""" | "I ^PS(53.4 | DA | 0) K ^PS(53.4 | ""AUD"" | +^(0) | +X | DA)" | 1 |  |  |  | 
131 | 53.5 | 0.01 | MUMPS | "^PS(53.5 | ""AC"" | " | "D EN535^PSGPLXR(DA | ""S"" | ""AC"")" | "D EN535^PSGPLXR(DA | ""K"" | ""AC"")" | 1 |  |  |  | 
132 | 53.5 | 0.01 | MUMPS | "^PS(53.5 | ""AB"" | " | "D ENABO^PSGPLXR(DA | ""AB"" | ""S"")" | "D ENABO^PSGPLXR(DA | ""AB"" | ""K"")" | 1 |  |  |  | 
133 | 53.5 | 0.01 | MUMPS | "^PS(53.5 | ""AO"" | " | "D ENABO^PSGPLXR(DA | ""AO"" | ""S"")" | "D ENABO^PSGPLXR(DA | ""AO"" | ""K"")" | 1 |  |  |  | 
134 | 53.5 | 0.01 | MUMPS | "^PS(53.5 | ""A"" | " | "D ENA^PSGPLXR(DA | ""S"")" | "D ENA^PSGPLXR(DA | ""K"")" | 1 |  |  |  | 
135 | 53.5 | 0.02 | MUMPS | "^PS(53.5 | ""A"" | " | "D ENA^PSGPLXR(DA | ""S"")" | "D ENA^PSGPLXR(DA | ""K"")" | 1 |  |  |  | 
136 | 53.5 | 0.02 | MUMPS | "^PS(53.5 | ""AB"" | " | "D:'$P(^(0) | U | 5) ENABO^PSGPLXR(DA | ""AB"" | ""S"")" | "D ENABO^PSGPLXR(DA | ""AB"" | ""K"")" | 1 |  |  |  | 
137 | 53.5 | 0.02 | MUMPS | "^PS(53.5 | ""AO"" | " | "D:$P(^(0) | U | 5)=2 ENABO^PSGPLXR(DA | ""AO"" | ""S"")" | "D ENABO^PSGPLXR(DA | ""AO"" | ""K"")" | 1 |  |  |  | 
138 | 53.5 | 0.03 | MUMPS | "^PS(53.5 | ""AB"" | " | "D:'$P(^(0) | U | 5) ENABO^PSGPLXR(DA | ""AB"" | ""S"")" | "D ENABO^PSGPLXR(DA | ""AB"" | ""K"")" | 1 |  |  |  | 
139 | 53.5 | 0.03 | MUMPS | "^PS(53.5 | ""AO"" | " | "D:$P(^(0) | U | 5)=2 ENABO^PSGPLXR(DA | ""AO"" | ""S"")" | "D ENABO^PSGPLXR(DA | ""AO"" | ""K"")" | 1 |  |  |  | 
140 | 53.5 | 0.05 | MUMPS | "^PS(53.5 | ""AF"" | " | "S:X=1 ^PS(53.5 | ""AF"" | DA)=""""" | "K ^PS(53.5 | ""AF"" | DA)" | 1 |  |  |  | 
141 | 53.51 | 0.01 | MUMPS | "^PS(53.5 | ""AC"" | " | "D EN5351^PSGPLXR(DA(1) | DA | ""S"" | ""AC"")" | "D EN5351^PSGPLXR(DA(1) | DA | ""K"" | ""AC"" | ""PT"" | X)" | 1 |  |  |  | 
142 | 53.51 | 0.01 | MUMPS | "^PS(53.5 | ""AU"" | " | "D EN5351^PSGPLXR(DA(1) | DA | ""S"" | ""AU"")" | "D EN5351^PSGPLXR(DA(1) | DA | ""K"" | ""AU"")" | 1 |  |  |  | 
143 | 53.51 | 0.02 | MUMPS | "^PS(53.5 | ""AC"" | " | "D EN5351^PSGPLXR(DA(1) | DA | ""S"" | ""AC"")" | "D EN5351^PSGPLXR(DA(1) | DA | ""K"" | ""AC"" | ""AT"" | X)" | 1 |  |  |  | 
144 | 53.51 | 0.02 | MUMPS | "^PS(53.5 | ""AU"" | " | "D EN5351^PSGPLXR(DA(1) | DA | ""S"" | ""AU"")" | "D EN5351^PSGPLXR(DA(1) | DA | ""K"" | ""AU"")" | 1 |  |  |  | 
145 | 53.51 | 0.03 | MUMPS | "^PS(53.5 | ""AC"" | " | "D EN5351^PSGPLXR(DA(1) | DA | ""S"" | ""AC"")" | "D EN5351^PSGPLXR(DA(1) | DA | ""K"" | ""AC"" | ""WD"" | X)" | 1 |  |  |  | 
146 | 53.51 | 0.03 | MUMPS | "^PS(53.5 | ""AU"" | " | "D EN5351^PSGPLXR(DA(1) | DA | ""S"" | ""AU"")" | "D EN5351^PSGPLXR(DA(1) | DA | ""K"" | ""AU"")" | 1 |  |  |  | 
147 | 53.51 | 0.04 | MUMPS | "^PS(53.5 | ""AC"" | " | "D EN5351^PSGPLXR(DA(1) | DA | ""S"" | ""AC"")" | "D EN5351^PSGPLXR(DA(1) | DA | ""K"" | ""AC"" | ""RB"" | X)" | 1 |  |  |  | 
148 | 53.51 | 0.04 | MUMPS | "^PS(53.5 | ""AU"" | " | "D EN5351^PSGPLXR(DA(1) | DA | ""S"" | ""AU"")" | "D EN5351^PSGPLXR(DA(1) | DA | ""K"" | ""AU"")" | 1 |  |  |  | 
149 | 53.51 | 0.05 | MUMPS | "^PS(53.5 | ""AU"" | " | "D EN5351^PSGPLXR(DA(1) | DA | ""S"" | ""AU"")" | "D EN5351^PSGPLXR(DA(1) | DA | ""K"" | ""AU"")" | 1 |  |  |  | 
150 | 53.52 | 0.02 | MUMPS | "^PS(53.5 | ""AC"" | " | "D EN5352^PSGPLXR(DA(2) | DA(1) | DA | ""S"" | ""AC"")" | "D EN5352^PSGPLXR(DA(2) | DA(1) | DA | ""K"" | ""AC"" | ""ST"" | X)" | 1 |  |  |  | 
151 | 53.52 | 0.02 | MUMPS | "^PS(53.5 | ""AU"" | " | "D EN5352^PSGPLXR(DA(2) | DA(1) | DA | ""S"" | ""AU"")" | "D EN5352^PSGPLXR(DA(2) | DA(1) | DA | ""K"" | ""AU"")" | 1 |  |  |  | 
152 | 53.52 | 0.05 | MUMPS | "^PS(53.5 | ""AU"" | " | "D EN5352^PSGPLXR(DA(2) | DA(1) | DA | ""S"" | ""AU"")" | "D EN5352^PSGPLXR(DA(2) | DA(1) | DA | ""K"" | ""AU"")" | 1 |  |  |  | 
153 | 53.52 | 0.06 | MUMPS | "^PS(53.5 | ""AC"" | " | "D EN5352^PSGPLXR(DA(2) | DA(1) | DA | ""S"" | ""AC"")" | "D EN5352^PSGPLXR(DA(2) | DA(1) | DA | ""K"" | ""AC"" | ""PD"" | X)" | 1 |  |  |  | 
154 | 53.52 | 0.06 | MUMPS | "^PS(53.5 | ""AU"" | " | "D EN5352^PSGPLXR(DA(2) | DA(1) | DA | ""S"" | ""AU"")" | "D EN5352^PSGPLXR(DA(2) | DA(1) | DA | ""K"" | ""AU"")" | 1 |  |  |  | 
155 | 53.53 | 0.01 | MUMPS | "^PS(53.5 | ""AC"" | " | "D EN5353^PSGPLXR(DA(3) | DA(2) | DA(1) | DA | ""S"" | ""AC"")" | "D EN5353^PSGPLXR(DA(3) | DA(2) | DA(1) | DA | ""K"" | ""AC"" | ""PDD"" | X)" | 1 |  |  |  | 
156 | 53.53 | 0.01 | MUMPS | "^PS(53.5 | ""AU"" | " | "D EN5353^PSGPLXR(DA(3) | DA(2) | DA(1) | DA | ""S"" | ""AU"")" | "D EN5353^PSGPLXR(DA(3) | DA(2) | DA(1) | DA | ""K"" | ""AU"")" | 1 |  |  |  | 
157 | 53.7 | 1 | MUMPS | "^ALPB(53.7 | " | "S ^ALPB(53.7 | ""BS"" | $E(X | 6 | 9) | DA)=""""" | "K ^ALPB(53.7 | ""BS"" | $E(X | 6 | 9) | DA)" | 1 |  |  |  | 
158 | 53.7 | 1 | MUMPS | "^ALPB(53.7 | " | "S ^ALPB(53.7 | ""BS5"" | $E($P(^ALPB(53.7 | DA | 0) | ""^"" | 1))_$E(X | 6 | 9) | DA)=""""" | "K ^ALPB(53.7 | ""BS5"" | $E($P(^ALPB(53.7 | DA | 0) | ""^"" | 1))_$E(X | 6 | 9) | DA)" | 1 |  |  |  | 
159 | 53.702 | 0.01 | MUMPS | "^ALPB(53.7 | " | "S ^ALPB(53.7 | ""AO"" | DA(1) | X | DA)=""""" | "K ^ALPB(53.7 | ""AO"" | DA(1) | X | DA)" | 1 |  |  |  | 
160 | 53.70213 | 0.01 | MUMPS | "^ALPB(53.7 | " | "S ^ALPB(53.7 | DA(2) | ""AMLOG"" | X)=""""" | "K ^ALPB(53.7 | DA(2) | ""AMLOG"" | X)" | 1 |  |  |  | 
161 | 53.70213 | 0.01 | MUMPS | "^ALPB(53.7 | " | "S ^ALPB(53.7 | DA(2) | 2 | DA(1) | 10 | ""IMLOG"" | (9999999-X) | DA)=""""" | "K ^ALPB(53.7 | DA(2) | 2 | DA(1) | 10 | ""IMLOG"" | (9999999-X) | DA)" | 1 |  |  |  | 
162 | 53.79 | 0.04 | MUMPS | "^PSB(53.79 | " | "S ^PSB(53.79 | ""AEDT"" | $P(^PSB(53.79 | DA | 0) | U) | X | DA)=""""" | "K ^PSB(53.79 | ""AEDT"" | $P(^PSB(53.79 | DA | 0) | U) | X | DA)" | 1 |  |  |  | 
163 | 53.79 | 0.06 | MUMPS | "^PSB(53.79 | " | "S ^PSB(53.79 | ""AADT"" | $P(^PSB(53.79 | DA | 0) | U) | X | DA)=""""" | "K ^PSB(53.79 | ""AADT"" | $P(^PSB(53.79 | DA | 0) | U) | X | DA)" | 1 |  |  |  | 
164 | 53.79 | 0.06 | MUMPS | "^PSB(53.79 | " | "I $P(^PSB(53.79 | DA | 0) | U | 8) S ^PSB(53.79 | ""AOIP"" | $P(^PSB(53.79 | DA | 0) | U) | $P(^PSB(53.79 | DA | 0) | U | 8) | X | DA)=""""" | "I $P(^PSB(53.79 | DA | 0) | U | 8) K ^PSB(53.79 | ""AOIP"" | $P(^PSB(53.79 | DA | 0) | U) | $P(^PSB(53.79 | DA | 0) | U | 8) | X | DA)" | 1 |  |  |  | 
165 | 53.79 | 0.06 | MUMPS | "^PSB(53.79 | " | "D AUDIT^PSBUTL(DA | 53.79 | .06 | X | ""S"")" | "D AUDIT^PSBUTL(DA | 53.79 | .06 | X | ""K"")" | 1 |  |  |  | Direct setting of data in routine
166 | 53.79 | 0.08 | MUMPS | "^PSB(53.79 | " | "I $P(^PSB(53.79 | DA | 0) | U | 6) S ^PSB(53.79 | ""AOIP"" | $P(^PSB(53.79 | DA | 0) | U) | X | +$P(^PSB(53.79 | DA | 0) | U | 6) | DA)=""""" | "I $P(^PSB(53.79 | DA | 0) | U | 6) K ^PSB(53.79 | ""AOIP"" | $P(^PSB(53.79 | DA | 0) | U) | X | +$P(^PSB(53.79 | DA | 0) | U | 6) | DA)" | 1 |  |  |  | 
167 | 53.79 | 0.09 | MUMPS | "^PSB(53.79 | " | "D AUDIT^PSBUTL(DA | 53.79 | .09 | X | ""S"")" | "D AUDIT^PSBUTL(DA | 53.79 | .09 | X | ""K"")" | 1 |  |  |  | Direct setting of data in routine
168 | 53.79 | 0.13 | MUMPS | "^PSB(53.79 | " | "I $P($G(^PSB(53.79 | DA | .1)) | U | 1)]"""" S ^PSB(53.79 | ""AORD"" | $P(^PSB(53.79 | DA | 0) | U) | $P(^PSB(53.79 | DA | .1) | U) | X | DA)=""""" | "I $P($G(^PSB(53.79 | DA | .1)) | U | 1)]"""" K ^PSB(53.79 | ""AORD"" | $P(^PSB(53.79 | DA | 0) | U) | $P(^PSB(53.79 | DA | .1) | U) | X | DA)" | 1 |  |  |  | 
169 | 53.79 | 0.14 | MUMPS | "^PSB(53.78 | " | "D CHECK^PSBVAR(+$G(^PSB(53.79 | DA | 0)) | X | DA)" | Q | 1 |  |  |  | Direct setting of data in routine
170 | 53.79 | 0.16 | MUMPS | "^PSB(53.79 | " | "D AUDIT^PSBUTL(DA | 53.79 | .16 | X | ""S"")" | "D AUDIT^PSBUTL(DA | 53.79 | .16 | X | ""K"")" | 1 |  |  |  | 
171 | 53.79 | 0.21 | MUMPS | "^PSB(53.79 | " | "D AUDIT^PSBUTL(DA | 53.79 | .21 | X | ""S"")" | "D AUDIT^PSBUTL(DA | 53.79 | .21 | X | ""K"")" | 1 |  |  |  | 
172 | 53.79 | 0.22 | MUMPS | "^PSB(53.79 | " | "D AUDIT^PSBUTL(DA | 53.79 | .22 | X | ""S"")" | "D AUDIT^PSBUTL(DA | 53.79 | .22 | X | ""K"")" | 1 |  |  |  | 
173 | 53.79 | 0.25 | MUMPS | "^PSB(53.78 | " | "D CHKPRN^PSBVAR(+$G(^PSB(53.79 | DA | 0)) | X | DA)" |  | 1 |  |  |  | Direct setting of data in routine
174 | 53.79 | 0.28 | MUMPS | "^PSB(53.79 | " | "D AUDIT^PSBUTL(DA | 53.79 | .28 | X | ""S"")" | "D AUDIT^PSBUTL(DA | 53.79 | .28 | X | ""K"")" | 1 |  |  |  | 
175 | 53.79 | 0.29 | MUMPS | "^PSB(53.79 | " | "D AUDIT^PSBUTL(DA | 53.79 | .29 | X | ""S"")" | "D AUDIT^PSBUTL(DA | 53.79 | .29 | X | ""K"")" | 1 |  |  |  | 
176 | 53.79 | 0.32 | MUMPS | "^PSB(53.79 | " | "D AUDIT^PSBUTL(DA | 53.79 | .32 | X | ""S"")" | "D AUDIT^PSBUTL(DA | 53.79 | .32 | X | ""K"")" | 1 |  |  |  | 
177 | 53.79 | 0.33 | MUMPS | "^PSB(53.79 | " | "D AUDIT^PSBUTL(DA | 53.79 | .33 | X | ""S"")" | "D AUDIT^PSBUTL(DA | 53.79 | .33 | X | ""K"")" | 1 |  |  |  | 
178 | 53.795 | 0.03 | MUMPS | "^PSB(53.79 | " | "D AUDIT^PSBUTL(DA(1) | 53.795 | .03 | X | ""S"")" | "D AUDIT^PSBUTL(DA(1) | 53.795 | .03 | X | ""K"")" | 1 |  |  |  | 
179 | 53.795 | 0.04 | MUMPS | "^PSB(53.79 | " | "D AUDIT^PSBUTL(DA(1) | 53.795 | .04 | X | ""S"")" | "D AUDIT^PSBUTL(DA(1) | 53.795 | .04 | X | ""K"")" | 1 |  |  |  | 
180 | 53.796 | 0.01 | MUMPS | "^PSB(53.79 | " | "I $P(^PSB(53.79 | DA | 0) | U | 6) S ^PSB(53.79 | ""AOIP3"" | $P(^PSB(53.79 | DA(1) | 0) | U) | DA(1) | X)=""""" | "I $P(^PSB(53.79 | DA | 0) | U | 6) K ^PSB(53.79 | ""AOIP3"" | $P(^PSB(53.79 | DA(1) | 0) | U) | DA(1) | X)" | 1 |  |  |  | 
181 | 53.796 | 0.03 | MUMPS | "^PSB(53.79 | " | "D AUDIT^PSBUTL(DA(1) | 53.796 | .03 | X | ""S"")" | "D AUDIT^PSBUTL(DA(1) | 53.796 | .03 | X | ""K"")" | 1 |  |  |  | 
182 | 53.796 | 0.04 | MUMPS | "^PSB(53.79 | " | "D AUDIT^PSBUTL(DA(1) | 53.796 | .04 | X | ""S"")" | "D AUDIT^PSBUTL(DA(1) | 53.796 | .04 | X | ""K"")" | 1 |  |  |  | 
183 | 53.797 | 0.01 | MUMPS | "^PSB(53.79 | " | "I $P(^PSB(53.79 | DA | 0) | U | 6) S ^PSB(53.79 | ""AOIP4"" | $P(^PSB(53.79 | DA(1) | 0) | U) | DA(1) | X)=""""" | "I $P(^PSB(53.79 | DA | 0) | U | 6) K ^PSB(53.79 | ""AOIP4"" | $P(^PSB(53.79 | DA(1) | 0) | U) | DA(1) | X)" | 1 |  |  |  | 
184 | 53.797 | 0.03 | MUMPS | "^PSB(53.79 | " | "D AUDIT^PSBUTL(DA(1) | 53.797 | .03 | X | ""S"")" | "D AUDIT^PSBUTL(DA(1) | 53.797 | .03 | X | ""K"")" | 1 |  |  |  | 
185 | 53.797 | 0.04 | MUMPS | "^PSB(53.79 | " | "D AUDIT^PSBUTL(DA(1) | 53.797 | .04 | X | ""S"")" | "D AUDIT^PSBUTL(DA(1) | 53.797 | .04 | X | ""K"")" | 1 |  |  |  | 
186 | 55 | 0.01 | MUMPS | "^PS(55 | " | "I '$D(PSGINITF) S ^PS(55 | ""ALCNVRT"")=$S($D(^PS(59.7 | 1 | 20)):$P(^(20) | ""^"") | 1:"""")" |  | 1 |  |  |  | Non-standard
187 | 55 | 0.01 | MUMPS | "^PS(55 | " | "I '$D(PSGINITF) S ^PS(55 | ""AUDDD"")=$S($D(^PS(59.7 | 1 | 20)):$P(^(20) | ""^"") | 1:"""")" |  | 1 |  |  |  | Non-standard
188 | 55 | 0.01 | MUMPS | "^PS(55 | " | "I '$D(PSGINITF) S ^PS(55 | ""AUDAPM"")=$S($D(^PS(59.7 | 1 | 20)):$P(^(20) | ""^"") | 1:"""")" |  | 1 |  |  |  | Non-standard
189 | 55 | 53 | MUMPS | "^PS(55 | " | "S ^PS(55 | ""ASAND"" | DA)=""""" | "K ^PS(55 | ""ASAND"" | DA)" | 1 |  |  |  | 
190 | 55.01 | 0.02 | MUMPS | "^PS(55 | " | "Q:$D(PSIVACT)  I '$D(DIU(0)) S PSIVF1=55.01 | PSIVF2=.02 D ENTO^PSIVAL" | "Q:$D(PSIVACT)  I '$D(DIU(0)) S PSIVF1=55.01 | PSIVF2=.02 D ENFR^PSIVAL" | 1 |  |  |  | Direct setting of data in the routine
191 | 55.01 | 0.03 | MUMPS | "^PS(55 | " | "Q:$D(PSIVACT)  I '$D(DIU(0)) S PSIVF1=55.01 | PSIVF2=.03 D ENTO^PSIVAL" | "Q:$D(PSIVACT)  I '$D(DIU(0)) S PSIVF1=55.01 | PSIVF2=.03 D ENFR^PSIVAL" | 1 |  |  |  | 
192 | 55.01 | 0.03 | MUMPS | "^PS(55 | " | "I $P($G(^PS(55 | DA(1) | ""IV"" | DA | 0)) | U | 4)]"""" S ^PS(55 | DA(1) | ""IV"" | ""AIT"" | $P(^(0) | U | 4) | +X | DA)=""""" | "I $P($G(^PS(55 | DA(1) | ""IV"" | DA | 0)) | U | 4)]"""" K ^PS(55 | DA(1) | ""IV"" | ""AIT"" | $P(^(0) | U | 4) | +X | DA)" | 1 |  |  |  | 
193 | 55.01 | 0.04 | MUMPS | "^PS(55 | " | "Q:$D(PSIVACT)  I '$D(DIU(0)) S PSIVF1=55.01 | PSIVF2=.04 D ENTO^PSIVAL" | "Q:$D(PSIVACT)  I '$D(DIU(0)) S PSIVF1=55.01 | PSIVF2=.04 D ENFR^PSIVAL" | 1 |  |  |  | 
194 | 55.01 | 0.06 | MUMPS | "^PS(55 | " | "Q:$D(PSIVACT)  I '$D(DIU(0)) S PSIVF1=55.01 | PSIVF2=.06 D ENTO^PSIVAL" | "Q:$D(PSIVACT)  I '$D(DIU(0)) S PSIVF1=55.01 | PSIVF2=.06 D ENFR^PSIVAL" | 1 |  |  |  | 
195 | 55.01 | 0.08 | MUMPS | "^PS(55 | " | "Q:$D(PSIVACT)  I '$D(DIU(0)) S PSIVF1=55.01 | PSIVF2=.08 D ENTO^PSIVAL" | "Q:$D(PSIVACT)  I '$D(DIU(0)) S PSIVF1=55.01 | PSIVF2=.08 D ENFR^PSIVAL" | 1 |  |  |  | 
196 | 55.01 | 0.09 | MUMPS | "^PS(55 | " | "Q:$D(PSIVACT)  I '$D(DIU(0)) S PSIVF1=55.01 | PSIVF2=.09 D ENTO^PSIVAL" | "Q:$D(PSIVACT)  I '$D(DIU(0)) S PSIVF1=55.01 | PSIVF2=.09 D ENFR^PSIVAL" | 1 |  |  |  | 
197 | 55.01 | 0.1 | MUMPS | "^PS(55 | " | "Q:$D(PSIVACT)  I '$D(DIU(0)) S PSIVF1=55.01 | PSIVF2=.1 D ENTO^PSIVAL" | "Q:$D(PSIVACT)  I '$D(DIU(0)) S PSIVF1=55.01 | PSIVF2=.1 D ENFR^PSIVAL" | 1 |  |  |  | 
198 | 55.01 | 0.12 | MUMPS | "^PS(55 | " | "Q:$D(PSIVACT)  I '$D(DIU(0)) S PSIVF1=55.01 | PSIVF2=.12 D ENTO^PSIVAL" | "Q:$D(PSIVACT)  I '$D(DIU(0)) S PSIVF1=55.01 | PSIVF2=.12 D ENFR^PSIVAL" | 1 |  |  |  | 
199 | 55.01 | 31 | MUMPS | "^PS(55 | " | "Q:$D(PSIVACT)  I '$D(DIU(0)) S PSIVF1=55.01 | PSIVF2=31 D ENTO^PSIVAL" | "Q:$D(PSIVACT)  I '$D(DIU(0)) S PSIVF1=55.01 | PSIVF2=31 D ENFR^PSIVAL" | 1 |  |  |  | 
200 | 55.01 | 100 | MUMPS | "^PS(55 | " | "Q:$D(PSIVACT)  I '$D(DIU(0)) S PSIVF1=55.01 | PSIVF2=100 D ENTO^PSIVAL" | "Q:$D(PSIVACT)  I '$D(DIU(0)) S PSIVF1=55.01 | PSIVF2=100 D ENFR^PSIVAL" | 1 |  |  |  | 
201 | 55.01 | 142 | MUMPS | "^PS(55 | " | "Q:$D(PSIVACT)  I '$D(DIU(0)) S PSIVF1=55.01 | PSIVF2=142 D ENTO^PSIVAL" | "Q:$D(PSIVACT)  I '$D(DIU(0)) S PSIVF1=55.01 | PSIVF2=142 D ENFR^PSIVAL" | 1 |  |  |  | 
202 | 55.01 | 142 | MUMPS |  | "K:X ^PS(55 | ""APIV"" | DA(1) | DA) S:'X ^PS(55 | ""APIV"" | DA(1) | DA)=""""" | "K ^PS(55 | ""APIV"" | DA(1) | DA)" | 1 |  |  |  | 
203 | 55.01 | 143 | MUMPS | "^PS(55 | " | "Q:$D(PSIVACT)  I '$D(DIU(0)) S PSIVF1=55.01 | PSIVF2=143 D ENTO^PSIVAL" | "Q:$D(PSIVACT)  I '$D(DIU(0)) S PSIVF1=55.01 | PSIVF2=143 D ENFR^PSIVAL" | 1 |  |  |  | 
204 | 55.01 | 143 | MUMPS |  | "K:X ^PS(55 | ""ANIV"" | DA(1) | DA) S:'X ^PS(55 | ""ANIV"" | DA(1) | DA)=""""" | "K ^PS(55 | ""ANIV"" | DA(1) | DA)" | 1 |  |  |  | 
205 | 55.0105 | 0.02 | MUMPS |  | "S ^PS(55 | DA(1) | ""IV"" | X | ""BCMA"" | DA)=""""" | "K ^PS(55 | DA(1) | ""IV"" | X | ""BCMA"" | DA)" | 1 |  |  |  | 
206 | 55.0108 | 1 | MUMPS |  | "S ^PS(55 | ""ASTALK"" | DA(1))=X" |  | 1 |  |  |  | 
207 | 55.02 | 0.01 | MUMPS | "^PS(55 | " | "Q:$D(PSIVACT)  I '$D(DIU(0)) S PSIVF1=55.02 | PSIVF2=.01 D ENTO^PSIVAL" | "Q:$D(PSIVACT)  I '$D(DIU(0)) S PSIVF1=55.02 | PSIVF2=.01 D ENFR^PSIVAL" | 1 |  |  |  | 
208 | 55.02 | 0.02 | MUMPS | "^PS(55 | " | "Q:$D(PSIVACT)  I '$D(DIU(0)) S PSIVF1=55.02 | PSIVF2=.02 D ENTO^PSIVAL" | "Q:$D(PSIVACT)  I '$D(DIU(0)) S PSIVF1=55.02 | PSIVF2=.02 D ENFR^PSIVAL" | 1 |  |  |  | 
209 | 55.02 | 0.03 | MUMPS | "^PS(55 | " | "Q:$D(PSIVACT)  S PSIVF1=55.02 | PSIVF2=.03 D ENTO^PSIVAL" | "Q:$D(PSIVACT)  S PSIVF1=55.02 | PSIVF2=.03 D ENFR^PSIVAL" | 1 |  |  |  | 
210 | 55.03 | 0.01 | MUMPS | "^PS(55 | " | D SREF^PSOHELP1 | D KREF^PSOHELP1 | 1 |  |  |  | 
211 | 55.06 | 0.01 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(1))#2 KILL^PSGAL5:PSGAL(1)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(1)=X | PSGAL(""C"")=6000 | PSGALFF=.01 D ^PSGAL5" | 1 |  |  |  | 
212 | 55.06 | 0.01 | MUMPS |  | "I '$D(DIU(0)) S ^PS(55 | ""AUE"" | DA(1) | DA)=""""" | "I '$D(DIU(0)) K ^PS(55 | ""AUE"" | DA(1) | DA)" | 1 |  |  |  | 
213 | 55.06 | 0.01 | MUMPS |  | Q | "K ^PS(55 | ""APV"" | DA(1) | DA)" | 1 |  |  |  | 
214 | 55.06 | 0.01 | MUMPS |  | Q | "K ^PS(55 | ""ANV"" | DA(1) | DA)" | 1 |  |  |  | 
215 | 55.06 | 0.25 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(55)) KILL^PSGAL5:PSGAL(55)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(55)=X | PSGAL(""C"")=6000 | PSGALFF=.25 D ^PSGAL5" | 1 |  |  |  | 
216 | 55.06 | 0.5 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(2)) KILL^PSGAL5:PSGAL(2)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(2)=X | PSGAL(""C"")=6000 | PSGALFF=.5 D ^PSGAL5" | 1 |  |  |  | 
217 | 55.06 | 1 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(3)) KILL^PSGAL5:PSGAL(3)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(3)=X | PSGAL(""C"")=6000 | PSGALFF=1 D ^PSGAL5" | 1 |  |  |  | 
218 | 55.06 | 3 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(4)) KILL^PSGAL5:PSGAL(4)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(4)=X | PSGAL(""C"")=6000 | PSGALFF=3 D ^PSGAL5" | 1 |  |  |  | 
219 | 55.06 | 4 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(5)) KILL^PSGAL5:PSGAL(5)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(5)=X | PSGAL(""C"")=6000 | PSGALFF=4 D ^PSGAL5" | 1 |  |  |  | 
220 | 55.06 | 5 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(6)) KILL^PSGAL5:PSGAL(6)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(6)=X | PSGAL(""C"")=6000 | PSGALFF=5 D ^PSGAL5" | 1 |  |  |  | 
221 | 55.06 | 6 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(7)) KILL^PSGAL5:PSGAL(7)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(7)=X | PSGAL(""C"")=6000 | PSGALFF=6 D ^PSGAL5" | 1 |  |  |  | 
222 | 55.06 | 7 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(8)) KILL^PSGAL5:PSGAL(8)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(8)=X | PSGAL(""C"")=6000 | PSGALFF=7 D ^PSGAL5" | 1 |  |  |  | 
223 | 55.06 | 7 | MUMPS |  | "I $D(^PS(55 | DA(1) | 5 | DA | 2)) | $P(^(2) | ""^"" | 4) S ^PS(55 | DA(1) | 5 | ""AU"" | X | +$P(^(2) | ""^"" | 4) | DA)=""""" | "I $D(^PS(55 | DA(1) | 5 | DA | 2)) | $P(^(2) | ""^"" | 4) K ^PS(55 | DA(1) | 5 | ""AU"" | X | +$P(^(2) | ""^"" | 4) | DA)" | 1 |  |  |  | 
224 | 55.06 | 8 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(9)) KILL^PSGAL5:PSGAL(9)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(9)=X | PSGAL(""C"")=6000 | PSGALFF=8 D ^PSGAL5" | 1 |  |  |  | 
225 | 55.06 | 10 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(41)) KILL^PSGAL5:PSGAL(41)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(41)=X | PSGAL(""C"")=6000 | PSGALFF=10 D ^PSGAL5" | 1 |  |  |  | 
226 | 55.06 | 11 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(11)) KILL^PSGAL5:PSGAL(11)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(11)=X | PSGAL(""C"")=6000 | PSGALFF=11 D ^PSGAL5" | 1 |  |  |  | 
227 | 55.06 | 12 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(12)) KILL^PSGAL5:PSGAL(12)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(12)=X | PSGAL(""C"")=6000 | PSGALFF=12 D ^PSGAL5" | 1 |  |  |  | 
228 | 55.06 | 13 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(13)) KILL^PSGAL5:PSGAL(13)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(13)=X | PSGAL(""C"")=6000 | PSGALFF=13 D ^PSGAL5" | 1 |  |  |  | 
229 | 55.06 | 14 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(14)) KILL^PSGAL5:PSGAL(14)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(14)=X | PSGAL(""C"")=6000 | PSGALFF=14 D ^PSGAL5" | 1 |  |  |  | 
230 | 55.06 | 16 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(15)) KILL^PSGAL5:PSGAL(15)=X K PSGAL | "I '$D(DIU(0)) | X | '$D(PSGPO) S PSGAL(15)=X | PSGAL(""C"")=6000 | PSGALFF=16 D ^PSGAL5" | 1 |  |  |  | 
231 | 55.06 | 16 | MUMPS |  | "X:'$D(PSGNVF) ""S PSGAL(""""C"""")=""""VN"""" D ^PSGAL5"" K PSGNVF | PSGAL" | S PSGNVF=1 | 1 |  |  |  | 
232 | 55.06 | 17 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(16)) KILL^PSGAL5:PSGAL(16)=X K PSGAL | "I '$D(DIU(0)) | X | '$D(PSGPO) S PSGAL(16)=X | PSGAL(""C"")=6000 | PSGALFF=17 D ^PSGAL5" | 1 |  |  |  | 
233 | 55.06 | 18 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(17)) KILL^PSGAL5:PSGAL(17)=X K PSGAL | "I X | '$D(DIU(0)) | '$D(PSGPO) S PSGAL(17)=X | PSGAL(""C"")=6000 | PSGALFF=18 D ^PSGAL5" | 1 |  |  |  | 
234 | 55.06 | 18 | MUMPS |  | "X:'$D(PSGNVF) ""S PSGAL(""""C"""")=""""VP"""" D ^PSGAL5"" K PSGNVF | PSGAL" | S PSGNVF=1 | 1 |  |  |  | 
235 | 55.06 | 19 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(18)) KILL^PSGAL5:PSGAL(18)=X K PSGAL | "I X | '$D(DIU(0)) | '$D(PSGPO) S PSGAL(18)=X | PSGAL(""C"")=6000 | PSGALFF=19 D ^PSGAL5" | 1 |  |  |  | 
236 | 55.06 | 20 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(19)) KILL^PSGAL5:PSGAL(19)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(19)=X | PSGAL(""C"")=6000 | PSGALFF=20 D ^PSGAL5" | 1 |  |  |  | 
237 | 55.06 | 21 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(20)) KILL^PSGAL5:PSGAL(20)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(20)=X | PSGAL(""C"")=6000 | PSGALFF=21 D ^PSGAL5" | 1 |  |  |  | 
238 | 55.06 | 22 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(21)) KILL^PSGAL5:PSGAL(21)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(21)=X | PSGAL(""C"")=6000 | PSGALFF=22 D ^PSGAL5" | 1 |  |  |  | 
239 | 55.06 | 23 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(22)) KILL^PSGAL5:PSGAL(22)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(22)=X | PSGAL(""C"")=6000 | PSGALFF=23 D ^PSGAL5" | 1 |  |  |  | 
240 | 55.06 | 24 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(23)) KILL^PSGAL5:PSGAL(23)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(23)=X | PSGAL(""C"")=6000 | PSGALFF=24 D ^PSGAL5" | 1 |  |  |  | 
241 | 55.06 | 25 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(24)) KILL^PSGAL5:PSGAL(24)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(24)=X | PSGAL(""C"")=6000 | PSGALFF=25 D ^PSGAL5" | 1 |  |  |  | 
242 | 55.06 | 26 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(25)) KILL^PSGAL5:PSGAL(25)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(43)=X | PSGAL(""C"")=6000 | PSGALFF=26 D ^PSGAL5" | 1 |  |  |  | 
243 | 55.06 | 27 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(26)) KILL^PSGAL5:PSGAL(26)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(26)=X | PSGAL(""C"")=6000 | PSGALFF=27 D ^PSGAL5" | 1 |  |  |  | 
244 | 55.06 | 27.1 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(27)) KILL^PSGAL5:PSGAL(27)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(27)=X | PSGAL(""C"")=6000 | PSGALFF=27.1 D ^PSGAL5" | 1 |  |  |  | 
245 | 55.06 | 28 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(28)) KILL^PSGAL5:PSGAL(28)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(28)=X | PSGAL(""C"")=6000 | PSGALFF=28 D ^PSGAL5" | 1 |  |  |  | 
246 | 55.06 | 32 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(51)) KILL^PSGAL5:PSGAL(51)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(51)=X | PSGAL(""C"")=6000 | PSGALFF=32 D ^PSGAL5" | 1 |  |  |  | 
247 | 55.06 | 34 | MUMPS |  | "S ^PS(55 | DA(1) | 5 | ""AUS"" | +X | DA)="""" I $P($G(^PS(55 | DA(1) | 5 | DA | 0)) | ""^"" | 7)]"""" S ^PS(55 | DA(1) | 5 | ""AU"" | $P(^(0) | ""^"" | 7) | +X | DA)=""""" | "K ^PS(55 | DA(1) | 5 | ""AUS"" | +X | DA) I $P($G(^PS(55 | DA(1) | 5 | DA | 0)) | ""^"" | 7)]"""" K ^PS(55 | DA(1) | 5 | ""AU"" | $P(^(0) | ""^"" | 7) | +X | DA)" | 1 |  |  |  | 
248 | 55.06 | 34 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(53)) KILL^PSGAL5:PSGAL(53)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(53)=X | PSGAL(""C"")=6000 | PSGALFF=34 D ^PSGAL5" | 1 |  |  |  | 
249 | 55.06 | 35 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(61)) KILL^PSGAL5:PSGAL(61)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(61)=X | PSGAL(""C"")=6000 | PSGALFF=35 D ^PSGAL5" | 1 |  |  |  | 
250 | 55.06 | 36 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(54)) KILL^PSGAL5:PSGAL(54)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(54)=X | PSGAL(""C"")=6000 | PSGALFF=36 D ^PSGAL5" | 1 |  |  |  | 
251 | 55.06 | 41 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(56)) KILL^PSGAL5:PSGAL(56)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(56)=X | PSGAL(""C"")=6000 | PSGALFF=41 D ^PSGAL5" | 1 |  |  |  | 
252 | 55.06 | 42 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(57)) KILL^PSGAL5:PSGAL(57)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(57)=X | PSGAL(""C"")=6000 | PSGALFF=42 D ^PSGAL5" | 1 |  |  |  | 
253 | 55.06 | 43 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(58)) KILL^PSGAL5:PSGAL(58)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(58)=X | PSGAL(""C"")=6000 | PSGALFF=43 D ^PSGAL5" | 1 |  |  |  | 
254 | 55.06 | 44 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(59)) KILL^PSGAL5:PSGAL(59)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(59)=X | PSGAL(""C"")=6000 | PSGALFF=44 D ^PSGAL5" | 1 |  |  |  | 
255 | 55.06 | 45 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(60)) KILL^PSGAL5:PSGAL(60)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(60)=X | PSGAL(""C"")=6000 | PSGALFF=45 D ^PSGAL5" | 1 |  |  |  | 
256 | 55.06 | 46 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(63)) KILL^PSGAL5:PSGAL(63)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(63)=X | PSGAL(""C"")=6000 | PSGALFF=46 D ^PSGAL5" | 1 |  |  |  | 
257 | 55.06 | 47 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(64)) KILL^PSGAL5:PSGAL(64)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(64)=X | PSGAL(""C"")=6000 | PSGALFF=47 D ^PSGAL5" | 1 |  |  |  | 
258 | 55.06 | 48 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(65)) KILL^PSGAL5:PSGAL(65)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(65)=X | PSGAL(""C"")=6000 | PSGALFF=48 D ^PSGAL5" | 1 |  |  |  | 
259 | 55.06 | 49 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(62)) KILL^PSGAL5:PSGAL(62)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(62)=X | PSGAL(""C"")=6000 | PSGALFF=49 D ^PSGAL5" | 1 |  |  |  | 
260 | 55.06 | 50 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(66)) KILL^PSGAL5:PSGAL(66)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(66)=X | PSGAL(""C"")=6000 | PSGALFF=50 D ^PSGAL5" | 1 |  |  |  | 
261 | 55.06 | 50 | MUMPS |  |  | "K ^PS(55 | ""APV"" | DA(1) | DA)" | 1 |  |  |  | 
262 | 55.06 | 51 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(67)) KILL^PSGAL5:PSGAL(67)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(67)=X | PSGAL(""C"")=6000 | PSGALFF=51 D ^PSGAL5" | 1 |  |  |  | 
263 | 55.06 | 52 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(68)) KILL^PSGAL5:PSGAL(68)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(68)=X | PSGAL(""C"")=6000 | PSGALFF=52 D ^PSGAL5" | 1 |  |  |  | 
264 | 55.06 | 53 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(69)) KILL^PSGAL5:PSGAL(69)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(69)=X | PSGAL(""C"")=6000 | PSGALFF=53 D ^PSGAL5" | 1 |  |  |  | 
265 | 55.06 | 54 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(70)) KILL^PSGAL5:PSGAL(70)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(70)=X | PSGAL(""C"")=6000 | PSGALFF=54 D ^PSGAL5" | 1 |  |  |  | 
266 | 55.06 | 56 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(71)) KILL^PSGAL5:PSGAL(71)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(71)=X | PSGAL(""C"")=6000 | PSGALFF=56 D ^PSGAL5" | 1 |  |  |  | 
267 | 55.06 | 57 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(72)) KILL^PSGAL5:PSGAL(72)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(72)=X | PSGAL(""C"")=6000 | PSGALFF=57 D ^PSGAL5" | 1 |  |  |  | 
268 | 55.06 | 58 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(73)) KILL^PSGAL5:PSGAL(73)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(73)=X | PSGAL(""C"")=6000 | PSGALFF=58 D ^PSGAL5" | 1 |  |  |  | 
269 | 55.06 | 59 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(74)) KILL^PSGAL5:PSGAL(74)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(74)=X | PSGAL(""C"")=6000 | PSGALFF=59 D ^PSGAL5" | 1 |  |  |  | 
270 | 55.06 | 60 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(75)) KILL^PSGAL5:PSGAL(75)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(75)=X | PSGAL(""C"")=6000 | PSGALFF=60 D ^PSGAL5" | 1 |  |  |  | 
271 | 55.06 | 61 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(76)) KILL^PSGAL5:PSGAL(76)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(76)=X | PSGAL(""C"")=6000 | PSGALFF=61 D ^PSGAL5" | 1 |  |  |  | 
272 | 55.06 | 62 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(77)) KILL^PSGAL5:PSGAL(77)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(77)=X | PSGAL(""C"")=6000 | PSGALFF=62 D ^PSGAL5" | 1 |  |  |  | 
273 | 55.06 | 64 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(79)) KILL^PSGAL5:PSGAL(79)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(79)=X | PSGAL(""C"")=6000 | PSGALFF=64 D ^PSGAL5" | 1 |  |  |  | 
274 | 55.06 | 65 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(78)) KILL^PSGAL5:PSGAL(78)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(78)=X | PSGAL(""C"")=6000 | PSGALFF=65 D ^PSGAL5" | 1 |  |  |  | 
275 | 55.06 | 66 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(80)) KILL^PSGAL5:PSGAL(80)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(80)=X | PSGAL(""C"")=6000 | PSGALFF=66 D ^PSGAL5" | 1 |  |  |  | 
276 | 55.06 | 66 | MUMPS |  | D STOREINT^PSGSICH1 |  | 1 |  |  |  | 
277 | 55.06 | 101 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(101)) KILL^PSGAL5:PSGAL(101)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(101)=X | PSGAL(""C"")=6000 | PSGALFF=101 | PSGALFN=55.06 D ^PSGAL5" | 1 |  |  |  | 
278 | 55.06 | 102 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(102)) KILL^PSGAL5:PSGAL(102)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(102)=X | PSGAL(""C"")=6000 | PSGALFF=102 | PSGALFN=55.06 D ^PSGAL5" | 1 |  |  |  | 
279 | 55.06 | 103 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(103)) KILL^PSGAL5:PSGAL(103)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(103)=X | PSGAL(""C"")=6000 | PSGALFF=103 | PSGALFN=55.06 D ^PSGAL5" | 1 |  |  |  | 
280 | 55.06 | 104 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(104)) KILL^PSGAL5:PSGAL(104)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(104)=X | PSGAL(""C"")=6000 | PSGALFF=104 | PSGALFN=55.06 D ^PSGAL5" | 1 |  |  |  | 
281 | 55.06 | 105 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(105)) KILL^PSGAL5:PSGAL(105)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(105)=X | PSGAL(""C"")=6000 | PSGALFF=105 | PSGALFN=55.06 D ^PSGAL5" | 1 |  |  |  | 
282 | 55.06 | 106 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(106)) KILL^PSGAL5:PSGAL(106)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(106)=X | PSGAL(""C"")=6000 | PSGALFF=106 | PSGALFN=55.06 D ^PSGAL5" | 1 |  |  |  | 
283 | 55.06 | 107 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(107)) KILL^PSGAL5:PSGAL(107)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(107)=X | PSGAL(""C"")=6000 | PSGALFF=107 | PSGALFN=55.06 D ^PSGAL5" | 1 |  |  |  | 
284 | 55.0611 | 0.01 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(1101)) KILL^PSGAL5:PSGAL(1101)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(1101)=X | PSGAL(""C"")=6000 | PSGALFF=.01 | PSGALFN=55.0611 D ^PSGAL5" | 1 |  |  |  | 
285 | 55.0611 | 0.02 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(1102)) KILL^PSGAL5:PSGAL(1102)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(1102)=X | PSGAL(""C"")=6000 | PSGALFF=.02 | PSGALFN=55.0611 D ^PSGAL5" | 1 |  |  |  | 
286 | 55.0611 | 0.03 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(1103)) KILL^PSGAL5:PSGAL(1103)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(1103)=X | PSGAL(""C"")=6000 | PSGALFF=.03 | PSGALFN=55.0611 D ^PSGAL5" | 1 |  |  |  | 
287 | 55.0611 | 0.04 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(1104)) KILL^PSGAL5:PSGAL(1104)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(1104)=X | PSGAL(""C"")=6000 | PSGALFF=.04 | PSGALFN=55.0611 D ^PSGAL5" | 1 |  |  |  | 
288 | 55.0611 | 0.05 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(1105)) KILL^PSGAL5:PSGAL(1105)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(1105)=X | PSGAL(""C"")=6000 | PSGALFF=.05 | PSGALFN=55.0611 D ^PSGAL5" | 1 |  |  |  | 
289 | 55.0611 | 0.06 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(1106)) KILL^PSGAL5:PSGAL(1106)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(1106)=X | PSGAL(""C"")=6000 | PSGALFF=1106 | PSGALFN=55.0611 D ^PSGAL5" | 1 |  |  |  | 
290 | 55.0611 | 0.07 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(1107)) KILL^PSGAL5:PSGAL(1107)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(1107)=X | PSGAL(""C"")=6000 | PSGALFF=1107 | PSGALFN=55.0611 D ^PSGAL5" | 1 |  |  |  | 
291 | 55.0611 | 0.08 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(1108)) KILL^PSGAL5:PSGAL(1108)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(1108)=X | PSGAL(""C"")=6000 | PSGALFF=1108 | PSGALFN=55.0611 D ^PSGAL5" | 1 |  |  |  | 
292 | 55.07 | 0.01 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(701)) KILL^PSGAL5:PSGAL(701)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(701)=X | PSGAL(""C"")=6000 | PSGALFF=.01 | PSGALFN=55.07 D ^PSGAL5" | 1 |  |  |  | 
293 | 55.07 | 0.02 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(702)) KILL^PSGAL5:PSGAL(702)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(702)=X | PSGAL(""C"")=6000 | PSGALFF=.02 | PSGALFN=55.07 D ^PSGAL5" | 1 |  |  |  | 
294 | 55.07 | 0.05 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(705)) KILL^PSGAL5:PSGAL(705)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(705)=X | PSGAL(""C"")=6000 | PSGALFF=.05 | PSGALFN=55.07 D ^PSGAL5" | 1 |  |  |  | 
295 | 55.07 | 0.06 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(706)) KILL^PSGAL5:PSGAL(706)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(706)=X | PSGAL(""C"")=6000 | PSGALFF=.06 | PSGALFN=55.07 D ^PSGAL5" | 1 |  |  |  | 
296 | 55.07 | 0.07 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(707)) KILL^PSGAL5:PSGAL(707)=X K PSGAL | "I '$D(PSGRET) | '$D(DIU(0)) | '$D(PSGPO) S PSGAL(707)=X | PSGAL(""C"")=6000 | PSGALFF=.07 | PSGALFN=55.07 D ^PSGAL5" | 1 |  |  |  | 
297 | 55.07 | 0.08 | MUMPS |  | "I '$D(DIU(0)) | X D EN^PSGAMSA(DA(2) | DA(1) | DA | 4)" |  | 1 |  |  |  | 
298 | 55.07 | 0.09 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(709)) KILL^PSGAL5:PSGAL(709)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(709)=X | PSGAL(""C"")=6000 | PSGALFF=.09 | PSGALFN=55.07 D ^PSGAL5" | 1 |  |  |  | 
299 | 55.07 | 0.09 | MUMPS |  | "I '$D(DIU(0)) | X D EN^PSGAMSA(DA(2) | DA(1) | DA | 2)" |  | 1 |  |  |  | 
300 | 55.07 | 0.1 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(710)) KILL^PSGAL5:PSGAL(710)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(710)=X | PSGAL(""C"")=6000 | PSGALFF=.1 | PSGALFN=55.07 D ^PSGAL5" | 1 |  |  |  | 
301 | 55.07 | 0.11 | MUMPS |  | "I '$D(DIU(0)) | X D EN^PSGAMSA(DA(2) | DA(1) | DA | 3)" |  | 1 |  |  |  | 
302 | 55.07 | 0.12 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(712)) KILL^PSGAL5:PSGAL(712)=X K PSGAL | "I '$D(PSGPEN) | '$D(DIU(0)) | '$D(PSGPO) S PSGAL(712)=X | PSGAL(""C"")=6000 | PSGALFF=.12 | PSGALFN=55.07 D ^PSGAL5" | 1 |  |  |  | 
303 | 55.09 | 0.01 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(35)) KILL^PSGAL5:PSGAL(35)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(35)=X | PSGAL(""C"")=6000 | PSGALFF=.01 | PSGALFN=55.09 D ^PSGAL5" | 1 |  |  |  | 
304 | 55.09 | 1 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(36)) KILL^PSGAL5:PSGAL(36)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(36)=X | PSGAL(""C"")=6000 | PSGALFF=1 | PSGALFN=55.09 D ^PSGAL5" | 1 |  |  |  | 
305 | 55.09 | 2 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(37)) KILL^PSGAL5:PSGAL(37)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(37)=X | PSGAL(""C"")=6000 | PSGALFF=2 | PSGALFN=55.09 D ^PSGAL5" | 1 |  |  |  | 
306 | 55.09 | 3 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(78)) KILL^PSGAL5:PSGAL(78)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(78)=X | PSGAL(""C"")=6000 | PSGALFF=3 | PSGALFN=55.09 D ^PSGAL5" | 1 |  |  |  | 
307 | 55.09 | 4 | MUMPS |  | I '$D(DIU(0)) D:$D(PSGAL(79)) KILL^PSGAL5:PSGAL(79)=X K PSGAL | "I '$D(DIU(0)) | '$D(PSGPO) S PSGAL(79)=X | PSGAL(""C"")=6000 | PSGALFF=4 | PSGALFN=55.09 D ^PSGAL5" | 1 |  |  |  | 
308 | 55.11 | 0.01 | MUMPS |  | "Q:$D(PSIVACT)  I '$D(DIU(0)) S PSIVF1=55.11 | PSIVF2=.01 D ENTO^PSIVAL" | "Q:$D(PSIVACT)  I '$D(DIU(0)) S PSIVF1=55.11 | PSIVF2=.01 D ENFR^PSIVAL" | 1 |  |  |  | 
309 | 55.11 | 1 | MUMPS |  | "Q:$D(PSIVACT)  I '$D(DIU(0)) S PSIVF1=55.11 | PSIVF2=1 D ENTO^PSIVAL" | "Q:$D(PSIVACT)  I '$D(DIU(0)) S PSIVF1=55.11 | PSIVF2=1 D ENFR^PSIVAL" | 1 |  |  |  | 
310 | 56 | 1 | MUMPS |  | "N ZZZ S ZZZ=$P(^PS(56 | DA | 0) | ""^"" | 3) I ZZZ S ^PS(56 | ""AE"" | X | ZZZ | DA)="""" | ^PS(56 | ""AE"" | ZZZ | X | DA)=""""" | "N ZZZ S ZZZ=$P(^PS(56 | DA | 0) | ""^"" | 3) I ZZZ K ^PS(56 | ""AE"" | X | ZZZ | DA) | ^PS(56 | ""AE"" | ZZZ | X | DA)" | 1 |  |  |  | 
311 | 56 | 2 | MUMPS |  | "N ZZZ S ZZZ=$P(^PS(56 | DA | 0) | ""^"" | 2) I ZZZ S ^PS(56 | ""AE"" | X | ZZZ | DA)="""" | ^PS(56 | ""AE"" | ZZZ | X | DA)=""""" | "N ZZZ S ZZZ=$P(^PS(56 | DA | 0) | ""^"" | 2) I ZZZ K ^PS(56 | ""AE"" | X | ZZZ | DA) | ^PS(56 | ""AE"" | ZZZ | X | DA)" | 1 |  |  |  | 
312 | 57.5 | 0.01 | MUMPS |  | "I '$D(PSGINITF) S ^PS(57.5 | ""ATNC"")=$S($D(^PS(59.7 | 1 | 20)):$P(^(20) | ""^"") | 1:"""")" |  | 1 |  |  |  | 
313 | 57.5 | 3 | MUMPS |  | "I $E(X)=""P"" | $D(^PS(57.5 | DA | 0)) S ^PS(57.5 | ""AP"" | $P(^(0) | ""^"") | DA)=""""" | "I $D(^PS(57.5 | DA | 0)) K ^PS(57.5 | ""AP"" | $P(^(0) | ""^"") | DA)" | 1 |  |  |  | 
314 | 57.51 | 0.01 | MUMPS |  | "I $D(^PS(57.5 | DA(1) | 0)) | $P(^(0) | ""^"" | 2)=""P"" S ^PS(57.5 | ""AB"" | $E(X | 1 | 30) | DA(1) | DA)=""""" | "K ^PS(57.5 | ""AB"" | $E(X | 1 | 30) | DA(1) | DA)" | 1 |  |  |  | 
315 | 57.51 | 0.01 | MUMPS |  | "S ^PS(57.5 | ""AC"" | DA(1) | X)=""""" | "K ^PS(57.5 | ""AC"" | DA(1) | X)" | 1 |  |  |  | 
316 | 57.702 | 0.01 | MUMPS |  | "S ^PS(57.7 | ""AWRT"" | DA(2) | X | DA(1) | DA)=""""" | "K ^PS(57.7 | ""AWRT"" | DA(2) | X | DA(1) | DA)" | 1 |  |  |  | 
317 | 58.1 | 6 | TRIGGER |  | Q | "K DIV S DIV=X | D0=DA | DIV(0)=D0 S Y(1)=$S($D(^PSI(58.1 | D0 | 0)):^(0) | 1:"""") S X=$P(Y(1) | U | 6) | X=X S DIU=X K Y S X="""" S DIH=$S($D(^PSI(58.1 | DIV(0) | 0)):^(0) | 1:"""") | DIV=X S $P(^(0) | U | 6)=DIV | DIH=58.1 | DIG=7 D ^DICR:$N(^DD(DIH | DIG | 1 | 0))>0" | 1 |  |  |  | 
318 | 58.11 | 30 | MUMPS |  | "S ^PSI(58.1 | DA(1) | 1 | DA | ""I"" | X)=""""" | "K ^PSI(58.1 | DA(1) | 1 | DA | ""I"" | X)" | 1 |  |  |  | 
319 | 58.11 | 35 | MUMPS |  | "S PSGWDRUG=+^PSI(58.1 | DA(1) | 1 | DA | 0) | ^PSI(58.1 | ""AEXP"" | $E(X | 1 | 30) | PSGWDRUG | DA(1))=
"""" K PSGWDRUG" | "S PSGWDRUG=+^PSI(58.1 | DA(1) | 1 | DA | 0) K ^PSI(58.1 | ""AEXP"" | $E(X | 1 | 30) | PSGWDRUG | DA(1)) | PSGWDRUG" | 1 |  |  |  | 
320 | 58.12 | 4 | MUMPS |  | Q:$D(PSGWV)  D QD^PSGWUTL | Q:$D(PSGWV)  D KQD^PSGWUTL | 1 |  |  |  | 
321 | 58.12 | 4 | MUMPS |  | Q:$D(PSGWV)  D QDERR^PSGWUTL | Q:$D(PSGWV)  D KQDERR^PSGWUTL | 1 |  |  |  | 
322 | 58.15 | 1 | MUMPS |  | Q:$D(PSGWV)  D RET^PSGWUTL | Q:$D(PSGWV)  D KRET^PSGWUTL | 1 |  |  |  | 
323 | 58.15 | 1 | MUMPS |  | Q:$D(PSGWV)  D RETERR^PSGWUTL | Q:$D(PSGWV)  D KRETERR^PSGWUTL | 1 |  |  |  | 
324 | 58.21 | 0.01 | MUMPS |  | "S ^PSI(58.2 | ""WS"" | DA(1) | $E(X | 1 | 30))=""""" | "K ^PSI(58.2 | ""WS"" | DA(1) | $E(X | 1 | 30))" | 1 |  |  |  | 
325 | 58.26 | 0.01 | MUMPS |  | "I $D(^PSI(58.1 | DA(2) | 1 | DA(1) | 0)) | ^(0) D INACT^PSGWUTL I $D(PSGWFLG) S ^PSI(58.1 | ""D"" | +^(0) | DA | DA(2))="""" K PSGWFLG" | "I $D(^PSI(58.1 | DA(2) | 1 | DA(1) | 0)) | ^(0) K ^PSI(58.1 | ""D"" | +^(0) | DA | DA(2))" | 1 |  |  |  | 
326 | 58.28 | 1 | MUMPS |  | Q:$D(PSGWV)  D OD^PSGWUTL | Q:$D(PSGWV)  D KOD^PSGWUTL | 1 |  |  |  | 
327 | 58.28 | 1 | MUMPS |  | Q:$D(PSGWV)  D ODERR^PSGWUTL | Q:$D(PSGWV)  D KODERR^PSGWUTL | 1 |  |  |  | 
328 | 58.29 | 0.01 | MUMPS |  | "S ^PSI(58.2 | ""CS"" | DA(1) | $E(X | 1 | 30))=""""" | "K ^PSI(58.2 | ""CS"" | DA(1) | $E(X | 1 | 30))" | 1 |  |  |  | 
329 | 58.52 | 2 | MUMPS |  | "I X=1 S ^PSI(58.5 | ""AEX"" | DA(2) | DA(1) | DA)=""""" | "K ^PSI(58.5 | ""AEX"" | DA(2) | DA(1) | DA)" | 1 |  |  |  | 
330 | 58.8 | 1 | MUMPS |  | D SASITE1^PSDUTL | D KASITE1^PSDUTL | 1 |  |  |  | 
331 | 58.8 | 2 | MUMPS |  | D SASITE^PSDUTL | D KASITE^PSDUTL | 1 |  |  |  | 
332 | 58.8001 | 11 | MUMPS |  | "S ^PSD(58.8 | ""AEXP"" | $E(X | 1 | 30) | DA | DA(1))=""""" | "K ^PSD(58.8 | ""AEXP"" | $E(X | 1 | 30) | DA | DA(1))" | 1 |  |  |  | 
333 | 58.8001 | 13 | MUMPS |  | "S ^PSD(58.8 | DA(1) | 1 | DA | ""I"" | X)=""""" | "K ^PSD(58.8 | DA(1) | 1 | DA | ""I"" | X) D DELR^PSDUTL" | 1 |  |  |  | 
334 | 58.800115 | 0.01 | MUMPS |  | "I $D(^PSD(58.8 | DA(2) | 1 | DA(1) | 0)) | ^(0) D INACT^PSDUTL I $D(PSDFLAG) S ^PSD(58.8 | ""D"" | +^(0) | DA | DA(2))="""" K PSDFLAG" | "I $D(^PSD(58.8 | DA(2) | 1 | DA(1) | 0)) | ^(0) K ^PSD(58.8 | ""D"" | +^(0) | DA | DA(2))" | 1 |  |  |  | 
335 | 58.800118 | 9 | MUMPS |  | "S ^PSD(58.8 | ""AEXPO"" | $E(X | 1 | 30) | DA(1) | DA(2) | DA)=""""" | "K ^PSD(58.8 | ""AEXPO"" | $E(X | 1 | 30) | DA(1) | DA(2) | DA)" | 1 |  |  |  | 
336 | 58.800118 | 10 | MUMPS |  | "S ^PSD(58.8 | ""AC"" | $E(X | 1 | 30) | DA(2) | DA(1) | DA)=""""" | "K ^PSD(58.8 | ""AC"" | $E(X | 1 | 30) | DA(2) | DA(1) | DA)" | 1 |  |  |  | 
337 | 58.81 | 1 | MUMPS |  | D SAFT^PSDUTL | D KAFT^PSDUTL | 1 |  |  |  | 
338 | 58.81 | 1 | MUMPS |  | D SACT1^PSDUTL1 | D KACT1^PSDUTL1 | 1 |  |  |  | 
339 | 58.81 | 2 | MUMPS |  | D SAFL^PSDUTL | D KAFL^PSDUTL | 1 |  |  |  | 
340 | 58.81 | 2 | MUMPS |  | D SACT2^PSDUTL1 | D KACT2^PSDUTL1 | 1 |  |  |  | 
341 | 58.81 | 2 | MUMPS |  | D SAEM2^PSDUTL5 | D KAEM2^PSDUTL5 | 1 |  |  |  | 
342 | 58.81 | 3 | MUMPS |  | D SAF^PSDUTL | D KAF^PSDUTL | 1 |  |  |  | 
343 | 58.81 | 3 | MUMPS |  | D SACT^PSDUTL1 | D KACT^PSDUTL1 | 1 |  |  |  | 
344 | 58.81 | 3 | MUMPS |  | D SAEM^PSDUTL5 | D KAEM^PSDUTL5 | 1 |  |  |  | 
345 | 58.81 | 4 | MUMPS |  | D SACT3^PSDUTL1 | D KACT3^PSDUTL1 | 1 |  |  |  | 
346 | 58.81 | 4 | MUMPS |  | D SAEM3^PSDUTL5 | D KAEM3^PSDUTL5 | 1 |  |  |  | 
347 | 58.81 | 10 | MUMPS |  | D SAD^PSDUTL | D KAD^PSDUTL | 1 |  |  |  | 
348 | 58.81 | 11 | MUMPS |  | D SAG^PSDUTL2 | D KAG^PSDUTL2 | 1 |  |  |  | 
349 | 58.81 | 17 | MUMPS |  | D SAD^PSDUTL1 | D KAD^PSDUTL1 | 1 |  |  |  | 
350 | 58.81 | 17 | MUMPS |  | D SAG1^PSDUTL2 | D KAG1^PSDUTL2 | 1 |  |  |  | 
351 | 58.81 | 17 | MUMPS |  | D SAK1^PSDUTL4 | D KAK1^PSDUTL4 | 1 |  |  |  | 
352 | 58.81 | 21 | MUMPS |  | D SAK^PSDUTL4 | D KAK^PSDUTL4 | 1 |  |  |  | 
353 | 58.81 | 34 | MUMPS |  | D SACT4^PSDUTL1 | D KACT4^PSDUTL1 | 1 |  |  |  | 
354 | 58.81 | 37 | MUMPS |  | D SACT7^PSDUTL3 | D KACT7^PSDUTL3 | 1 |  |  |  | 
355 | 58.81 | 48 | MUMPS |  | D SACT5^PSDUTL1 | D KACT5^PSDUTL1 | 1 |  |  |  | 
356 | 58.81 | 55 | MUMPS |  | D SACT6^PSDUTL1 | D KACT6^PSDUTL1 | 1 |  |  |  | 
357 | 58.81 | 71 | MUMPS |  | "I $P($G(^PSD(58.81 | DA | 8)) | U | 2)="""" S ^PSD(58.81 | ""PV"" | X | DA)=""""" | "I $P($G(^PSD(58.81 | DA | 8)) | U | 2)="""" K ^PSD(58.81 | ""PV"" | X | DA)" | 1 |  |  |  | 
358 | 58.81 | 85 | MUMPS |  | D SAEM1^PSDUTL5 | D KAEM1^PSDUTL5 | 1 |  |  |  | 
359 | 58.811 | 0.01 | MUMPS |  | D SETAORD^PSAUTL3 | D KILLAORD^PSAUTL3 | 1 |  |  |  | 
360 | 58.8112 | 0.01 | MUMPS |  | "S ^PSD(58.811 | ""AORD"" | $P($G(^PSD(58.811 | DA(1) | 0)) | ""^"") | X | DA(1) | DA)=""""" | "K ^PSD(58.811 | ""AORD"" | $P($G(^PSD(58.811 | DA(1) | 0)) | ""^"") | X | DA(1) | DA)" | 1 |  |  |  | 
361 | 58.8112 | 1 | MUMPS |  | D SLOCDT^PSAUTL3 | D KLOCDT^PSAUTL3 | 1 |  |  |  | 
362 | 58.8112 | 4 | MUMPS |  | D SLOC^PSAUTL3 | D KLOC^PSAUTL3 | 1 |  |  |  | 
363 | 58.8112 | 13 | MUMPS |  | D SLOC^PSAUTL3 | D KLOC^PSAUTL3 | 1 |  |  |  | 
364 | 58.85 | 1 | MUMPS |  | D SAW1^PSDUTL1 | D KAW1^PSDUTL1 | 1 |  |  |  | 
365 | 58.85 | 4 | MUMPS |  | D REQ^PSDUTL | D KREQ^PSDUTL | 1 |  |  |  | 
366 | 58.85 | 6 | MUMPS |  | D STAT^PSDUTL | D KSTAT^PSDUTL | 1 |  |  |  | 
367 | 58.85 | 13 | MUMPS |  | D SAW^PSDUTL1 | D KAW^PSDUTL1 | 1 |  |  |  | 
368 | 58.86 | 1 | MUMPS |  | D SAC1^PSDUTL3 | D KAC1^PSDUTL3 | 1 |  |  |  | 
369 | 58.86 | 6 | MUMPS |  | D SAC2^PSDUTL3 | D KAC2^PSDUTL3 | 1 |  |  |  | 
370 | 58.86 | 6 | MUMPS |  | D SAD2^PSDUTL3 | D KAD2^PSDUTL3 | 1 |  |  |  | 
371 | 58.86 | 10 | MUMPS |  | D SAC^PSDUTL3 | D KAC^PSDUTL3 | 1 |  |  |  | 
372 | 58.86 | 10 | MUMPS |  | D SAD^PSDUTL3 | D KAD^PSDUTL3 | 1 |  |  |  | 
373 | 58.86 | 13 | MUMPS |  | D SAD1^PSDUTL3 | D KAD1^PSDUTL3 | 1 |  |  |  | 
374 | 58.87 | 1 | MUMPS |  | D SAC^PSDUTL2 | D KAC^PSDUTL2 | 1 |  |  |  | 
375 | 58.87 | 11 | MUMPS |  | D SAC1^PSDUTL2 | D KAC1^PSDUTL2 | 1 |  |  |  | 
376 | 58.87 | 12 | MUMPS |  | D SAC2^PSDUTL2 | D KAC2^PSDUTL2 | 1 |  |  |  | 
377 | 58.89 | 2 | MUMPS |  | D SAD^PSDUTL4 | D KAD^PSDUTL4 | 1 |  |  |  | 
378 | 58.89 | 4 | MUMPS |  | D SAE^PSDUTL4 | D KAE^PSDUTL4 | 1 |  |  |  | 
379 | 58.89 | 6 | MUMPS |  | D SAD1^PSDUTL4 | D KAD1^PSDUTL4 | 1 |  |  |  | 
380 | 58.89 | 6 | MUMPS |  | D SAE1^PSDUTL4 | D KAE1^PSDUTL4 | 1 |  |  |  | 
381 | 59.4 | 0.01 | MUMPS |  | "I '$D(PSGINITF) S ^PS(59.4 | ""AUPLK"")=$S($D(^PS(59.7 | 1 | 20)):$P(^(20) | ""^"") | 1:"""")" |  | 1 |  |  |  | 
382 | 59.4 | 0.01 | MUMPS |  | "S ^PS(59.4 | ""APLFC"")=$S($D(^PS(59.7 | 1 | 20)):$P(^(20) | ""^"") | 1:"""")" |  | 1 |  |  |  | 
383 | 59.52 | 0.01 | MUMPS |  | "S ^PS(59.5 | DA(1) | 3 | ""AT"" | +("".""_X) | DA)=""""" | "K ^PS(59.5 | DA(1) | 3 | ""AT"" | +("".""_X) | DA)" | 1 |  |  |  | 
384 | 59.7 | 40.21 | MUMPS |  | "S ^PS(59.7 | ""AOTH"" | ""SECONDS"" | X)=""""" | "K ^PS(59.7 | ""AOTH"" | ""SECONDS"" | X)" | 1 |  |  |  | 
385 | 59.7 | 40.22 | MUMPS |  | "S ^PS(59.7 | ""AOTH"" | ""MINUTES"" | X)=""""" | "K ^PS(59.7 | ""AOTH"" | ""MINUTES"" | X)" | 1 |  |  |  | 
386 | 59.7 | 40.23 | MUMPS |  | "S ^PS(59.7 | ""AOTH"" | ""DAYS"" | X)=""""" | "K ^PS(59.7 | ""AOTH"" | ""DAYS"" | X)" | 1 |  |  |  | 
387 | 59.7 | 40.24 | MUMPS |  | "S ^PS(59.7 | ""AOTH"" | ""WEEKS"" | X)=""""" | "K ^PS(59.7 | ""AOTH"" | ""WEEKS"" | X)" | 1 |  |  |  | 
388 | 59.7 | 40.25 | MUMPS |  | "S ^PS(59.7 | ""AOTH"" | ""HOURS"" | X)=""""" | "K ^PS(59.7 | ""AOTH"" | ""HOURS"" | X)" | 1 |  |  |  | 
389 | 59.7 | 40.26 | MUMPS |  | "S ^PS(59.7 | ""AOTH"" | ""MONTHS"" | X)=""""" | "K ^PS(59.7 | ""AOTH"" | ""MONTHS"" | X)" | 1 |  |  |  | 
390 | 59.7 | 40.27 | MUMPS |  | "S ^PS(59.7 | ""AOTH"" | ""AND"" | X)=""""" | "K ^PS(59.7 | ""AOTH"" | ""AND"" | X)" | 1 |  |  |  | 
391 | 59.7 | 40.28 | MUMPS |  | "S ^PS(59.7 | ""AOTH"" | ""THEN"" | X)=""""" | "K ^PS(59.7 | ""AOTH"" | ""THEN"" | X)" | 1 |  |  |  | 
392 | 59.7 | 40.29 | MUMPS |  | "S ^PS(59.7 | ""AOTH"" | ""EXCEPT"" | X)=""""" | "K ^PS(59.7 | ""AOTH"" | ""EXCEPT"" | X)" | 1 |  |  |  | 
393 | 59.7 | 40.3 | MUMPS |  | "S ^PS(59.7 | ""AOTH"" | ""ONE"" | X)=""""" | "K ^PS(59.7 | ""AOTH"" | ""ONE"" | X)" | 1 |  |  |  | 
394 | 59.7 | 40.31 | MUMPS |  | "S ^PS(59.7 | ""AOTH"" | ""TWO"" | X)=""""" | "K ^PS(59.7 | ""AOTH"" | ""TWO"" | X)" | 1 |  |  |  | 
395 | 59.7 | 40.32 | MUMPS |  | "S ^PS(59.7 | ""AOTH"" | ""THREE"" | X)=""""" | "K ^PS(59.7 | ""AOTH"" | ""THREE"" | X)" | 1 |  |  |  | 
396 | 59.7 | 40.33 | MUMPS |  | "S ^PS(59.7 | ""AOTH"" | ""FOUR"" | X)=""""" | "K ^PS(59.7 | ""AOTH"" | ""FOUR"" | X)" | 1 |  |  |  | 
397 | 59.7 | 40.34 | MUMPS |  | "S ^PS(59.7 | ""AOTH"" | ""FIVE"" | X)=""""" | "K ^PS(59.7 | ""AOTH"" | ""FIVE"" | X)" | 1 |  |  |  | 
398 | 59.7 | 40.35 | MUMPS |  | "S ^PS(59.7 | ""AOTH"" | ""SIX"" | X)=""""" | "K ^PS(59.7 | ""AOTH"" | ""SIX"" | X)" | 1 |  |  |  | 
399 | 59.7 | 40.36 | MUMPS |  | "S ^PS(59.7 | ""AOTH"" | ""SEVEN"" | X)=""""" | "K ^PS(59.7 | ""AOTH"" | ""SEVEN"" | X)" | 1 |  |  |  | 
400 | 59.7 | 40.37 | MUMPS |  | "S ^PS(59.7 | ""AOTH"" | ""EIGHT"" | X)=""""" | "K ^PS(59.7 | ""AOTH"" | ""EIGHT"" | X)" | 1 |  |  |  | 
401 | 59.7 | 40.38 | MUMPS |  | "S ^PS(59.7 | ""AOTH"" | ""NINE"" | X)=""""" | "K ^PS(59.7 | ""AOTH"" | ""NINE"" | X)" | 1 |  |  |  | 
402 | 59.7 | 40.39 | MUMPS |  | "S ^PS(59.7 | ""AOTH"" | ""TEN"" | X)=""""" | "K ^PS(59.7 | ""AOTH"" | ""TEN"" | X)" | 1 |  |  |  | 
403 | 59.7 | 40.4 | MUMPS |  | "S ^PS(59.7 | ""AOTH"" | ""ONE-HALF"" | X)=""""" | "K ^PS(59.7 | ""AOTH"" | ""ONE-HALF"" | X)" | 1 |  |  |  | 
404 | 59.7 | 40.41 | MUMPS |  | "S ^PS(59.7 | ""AOTH"" | ""ONE-FOURTH"" | X)=""""" | "K ^PS(59.7 | ""AOTH"" | ""ONE-FOURTH"" | X)" | 1 |  |  |  | 
405 | 59.7 | 40.42 | MUMPS |  | "S ^PS(59.7 | ""AOTH"" | ""ONE-THIRD"" | X)=""""" | "K ^PS(59.7 | ""AOTH"" | ""ONE-THIRD"" | X)" | 1 |  |  |  | 
406 | 59.7 | 40.43 | MUMPS |  | "S ^PS(59.7 | ""AOTH"" | ""TWO-THIRDS"" | X)=""""" | "K ^PS(59.7 | ""AOTH"" | ""TWO-THIRDS"" | X)" | 1 |  |  |  | 
407 | 59.7 | 40.44 | MUMPS |  | "S ^PS(59.7 | ""AOTH"" | ""THREE-FOURTHS"" | X)=""""" | "K ^PS(59.7 | ""AOTH"" | ""THREE-FOURTHS"" | X)" | 1 |  |  |  | 
408 | 59.7 | 40.45 | MUMPS |  | "S ^PS(59.7 | ""AOTH"" | ""FOR"" | X)=""""" | "K ^PS(59.7 | ""AOTH"" | ""FOR"" | X)" | 1 |  |  |  | 
409 | 59.722 | 0.01 | MUMPS |  | "F Z=0:0 S Z=$O(^PS(59.7 | DA(1) | 22 | DA | 1 | Z)) Q:'Z  I $D(^(Z | 0)) | ^(0) S ^PS(59.7 | DA(1) | 22 | ""AFT"" | X | +^(0))=""""" | "F Z=0:0 S Z=$O(^PS(59.7 | DA(1) | 22 | DA | 1 | Z)) Q:'Z  I $D(^(Z | 0)) | ^(0) K ^PS(59.7 | DA(1) | 22 | ""AFT"" | X | +^(0))" | 1 |  |  |  | 
410 | 59.7221 | 0.01 | MUMPS |  | "I $D(^PS(59.7 | DA(2) | 22 | DA(1) | 0)) | ^(0) S ^PS(59.7 | DA(2) | 22 | ""AFT"" | +^(0) | X)=""""" | "I $D(^PS(59.7 | DA(2) | 22 | DA(1) | 0)) | ^(0) K ^PS(59.7 | DA(2) | 22 | ""AFT"" | +^(0) | X)" | 1 |  |  |  | 
411 | 59.723 | 0.01 | MUMPS |  | "F Z=0:0 S Z=$O(^PS(59.7 | DA(1) | 23 | DA | 1 | Z)) Q:'Z  I $D(^(Z | 0)) | $P(^(0) | ""^"")]"""" S ^PS(59.7 | DA(1) | 23 | ""AFT"" | X | $P(^(0) | ""^""))=""""" | "F Z=0:0 S Z=$O(^PS(59.7 | DA(1) | 23 | DA | 1 | Z)) Q:'Z  I $D(^(Z | 0)) | $P(^(0) | ""^"")]"""" K ^PS(59.7 | DA(1) | 23 | ""AFT"" | X | $P(^(0) | ""^""))" | 1 |  |  |  | 
412 | 59.7231 | 0.01 | MUMPS |  | "I $D(^PS(59.7 | DA(2) | 23 | DA(1) | 0)) | $P(^(0) | ""^"")]"""" S ^PS(59.7 | DA(2) | 23 | ""AFT"" | $P(^(0) | ""^"") | X)=""""" | "I $D(^PS(59.7 | DA(2) | 23 | DA(1) | 0)) | $P(^(0) | ""^"")]"""" K ^PS(59.7 | DA(2) | 23 | ""AFT"" | $P(^(0) | ""^"") | X)" | 1 |  |  |  | 
413 | 60 | 0.01 | MUMPS |  | "N TEST S TEST=DA N DA | DIE | DIC | DE | DW | DH | DS | DO | DD D UPD^LR7OV0(TEST)" | "N TEST S TEST=DA N DA | DIE | DIC | DE | DW | DH | DS | DO | DD D UPD^LR7OV0(TEST)" | 1 |  |  |  | 
414 | 60 | 1 | MUMPS |  | "N TEST S TEST=DA N DA | DIE | DIC | DE | DW | DH | DS | DO | DD D UPD^LR7OV0(TEST)" | "N TEST S TEST=DA N DA | DIE | DIC | DE | DW | DH | DS | DO | DD D UPD^LR7OV0(TEST)" | 1 |  |  |  | 
415 | 60 | 3 | MUMPS |  | "N TEST S TEST=DA N DA | DIE | DIC | DE | DW | DH | DS | DO | DD D UPD^LR7OV0(TEST)" | "N TEST S TEST=DA N DA | DIE | DIC | DE | DW | DH | DS | DO | DD D UPD^LR7OV0(TEST)" | 1 |  |  |  | 
416 | 60 | 4 | MUMPS |  | "N TEST S TEST=DA N DA | DIE | DIC | DE | DW | DH | DS | DO | DD D UPD^LR7OV0(TEST)" | "N TEST S TEST=DA N DA | DIE | DIC | DE | DW | DH | DS | DO | DD D UPD^LR7OV0(TEST)" | 1 |  |  |  | 
417 | 60 | 64 | MUMPS |  | "S ^LAB(60 | ""AD"" | DA | $E(X | 1 | 30))=""""" | "K ^LAB(60 | ""AD"" | DA | $E(X | 1 | 30))" | 1 |  |  |  | 
418 | 60 | 64 | MUMPS |  | "N TEST S TEST=DA N DA | DIE | DIC | DE | DW | DH | DS | DO | DD D UPD^LR7OV0(TEST)" | "N TEST S TEST=DA N DA | DIE | DIC | DE | DW | DH | DS | DO | DD D UPD^LR7OV0(TEST)" | 1 |  |  |  | 
419 | 60 | 64.1 | MUMPS |  | "S ^LAB(60 | ""AE"" | $P($G(^LAM(X | 0)) | U | 2) | DA)=""""" | "K ^LAB(60 | ""AE"" | $P($G(^LAM(X | 0)) | U | 2) | DA)" | 1 |  |  |  | 
420 | 60.01 | 95.3 | MUMPS |  | "S ^LAB(60 | ""AG"" | DA(1) | DA | $E(X | 1 | 30))=""""" | "K ^LAB(60 | ""AG"" | DA(1) | DA | $E(X | 1 | 30))" | 1 |  |  |  | 
421 | 60.1 | 0.01 | MUMPS |  | "N TEST S TEST=DA(1) N DA | DIE | DIC | DE | DW | DH | DS | DO | DD D UPD^LR7OV0(TEST)" | "N TEST | KSYN S TEST=DA(1) | KSYN=DA N DA | DIE | DIC | DE | DW | DH | DS | DO | DD D UPD2^LR7OV0(TEST | KSYN)" | 1 |  |  |  | 
422 | 60.2 | 0.01 | MUMPS |  | "S ^LAB(60 | DA(2) | 1 | ""AC"" | $E(X | 1 | 30) | DA(1) | DA)=""""" | "K ^LAB(60 | DA(2) | 1 | ""AC"" | $E(X | 1 | 30) | DA(1) | DA)" | 1 |  |  |  | 
423 | 62.05 | 4 | MUMPS |  | "S ^LAB(62.05 | ""HL7"" | $P(^LAB(64.061 | X | 0) | U | 3) | DA)=""""" | "K ^LAB(62.05 | ""HL7"" | $P(^LAB(64.061 | X | 0) | U | 3) | DA)" | 1 |  |  |  | 
424 | 62.06 | 1 | MUMPS |  | D BUGNODE^LRMIXR1 | "K ^LAB(62.06 | ""AJ"" | +X)" | 1 |  |  |  | 
425 | 62.06 | 1 | MUMPS |  | D BUGNODE^LRMIXR2 | "K ^LAB(62.06 | ""AS"" | +X)" | 1 |  |  |  | 
426 | 62.06 | 1 | MUMPS |  | D BUGNODE^LRMIXR3 | "K ^LAB(62.06 | ""AI"" | +X)" | 1 |  |  |  | 
427 | 62.06 | 1 | MUMPS |  | D ^LRMIXALL | D ^LRMIXALL | 1 |  |  |  | 
428 | 62.06 | 5 | MUMPS |  | "S ^LAB(62.06 | ""C"" | $P(^DD(63.3 | X | 0) | U | 1) | DA)=""""" | "K ^LAB(62.06 | ""C"" | $P(^DD(63.3 | X | 0) | U | 1) | DA)" | 1 |  |  |  | 
429 | 62.06 | 7 | MUMPS |  | "I $L($P(^LAB(62.06 | DA | 0) | U | 2)) S ^LAB(62.06 | ""AS"" | +$P(^(0) | U | 2))=X" |  | 1 |  |  |  | 
430 | 62.061 | 0.01 | MUMPS |  | "S ^LAB(62.06 | DA(1) | 1 | ""B"" | X | DA)=""""" | "K ^LAB(62.06 | DA(1) | 1 | ""B"" | X | DA)" | 1 |  |  |  | 
431 | 62.061 | 0.01 | MUMPS |  | "I $L($P(^LAB(62.06 | DA(1) | 0) | U | 2)) | $L($P(^LAB(62.06 | DA(1) | 1 | DA | 0) | U | 2)) S ^LAB(62.06 | ""AI"" | +$P(^LAB(62.06 | DA(1) | 0) | U | 2) | X)=$P(^LAB(62.06 | DA(1) | 1 | DA | 0) | U | 2)" | "I $L($P(^LAB(62.06 | DA(1) | 0) | U | 2)) K ^LAB(62.06 | ""AI"" | +$P(^LAB(62.06 | DA(1) | 0) | U | 2) | X)" | 1 |  |  |  | 
432 | 62.061 | 0.01 | MUMPS |  | "I $L($P(^LAB(62.06 | DA(1) | 0) | U | 2)) S ^LAB(62.06 | ""AJ"" | +$P(^(0) | U | 2) | X)=""""" | "I $L($P(^LAB(62.06 | DA(1) | 0) | U | 2)) S K9=$P(^(0) | U | 2) K ^LAB(62.06 | ""AJ"" | K9 | X)" | 1 |  |  |  | 
433 | 62.061 | 1 | MUMPS |  | "I $L($P(^LAB(62.06 | DA(1) | 0) | U | 2)) S ^LAB(62.06 | ""AJ"" | +$P(^(0) | U | 2) | X)=""""" | D KINT^LRMIXR1 | 1 |  |  |  | 
434 | 62.061 | 1 | MUMPS |  | "I $L($P(^LAB(62.06 | DA(1) | 0) | U | 2)) S ^LAB(62.06 | ""AI"" | +$P(^LAB(62.06 | DA(1) | 0) | U | 2) | $P(^LAB(62.06 | DA(1) | 1 | DA | 0) | U))=X" | "I $L($P(^LAB(62.06 | DA(1) | 0) | U | 2)) K ^LAB(62.06 | ""AI"" | +$P(^LAB(62.06 | DA(1) | 0) | U | 2) | $P(^LAB(62.06 | DA(1) | 1 | DA | 0) | U))" | 1 |  |  |  | 
435 | 62.07 | 5 | MUMPS |  | "S ^LAB(""X"" | X)=^LAB(62.07 | DA | .1)" | "K ^LAB(""X"" | X)" | 1 |  |  |  | 
436 | 62.08 | 0.01 | MUMPS |  | D ^LRMIXALL | "D KALT^LRMIXR2 | ^LRMIXALL" | 1 |  |  |  | 
437 | 62.08 | 1 | MUMPS |  | D ALTO^LRMIXR2 | D KALT^LRMIXR2 | 1 |  |  |  | 
438 | 62.08 | 2 | MUMPS |  | D ALTS^LRMIXR2 | D KALT^LRMIXR2 | 1 |  |  |  | 
439 | 62.091 | 0.01 | MUMPS |  | D ALT^LRMIXR3 | D KALT^LRMIXR3 | 1 |  |  |  | 
440 | 62.091 | 0.01 | MUMPS |  | "I $L($P(^LAB(62.06 | DA(2) | 0) | U | 2)) S ^LAB(62.06 | ""AJ"" | +$P(^(0) | U | 2) | X)=""""" | D KAINT^LRMIXR1 | 1 |  |  |  | 
441 | 62.091 | 1 | MUMPS |  | D ALTO^LRMIXR3 | D KALT^LRMIXR3 | 1 |  |  |  | 
442 | 62.091 | 2 | MUMPS |  | D ALTS^LRMIXR3 | D KALT^LRMIXR3 | 1 |  |  |  | 
443 | 62.3 | 0.01 | MUMPS |  | "S LRDPF=""62.3^LAB(62.3 | "" | DFN=DA | PDIC=DIC | PDIC(0)=$S($D(DIC(0)):DIC(0) | 1:"""") D END^LRDPA S X=DFN | DIC=PDIC | DIC(0)=PDIC(0) K PDIC" |  | 1 |  |  |  | 
444 | 62.4 | 3 | MUMPS |  | "I $P(^LAB(62.4 | DA | 0) | U | 6)=""SEQN"" S ^LRO(68.2 | ""AS"" | X | DA)=""""" | "K ^LRO(68.2 | ""AS"" | X | DA)" | 1 |  |  |  | 
445 | 62.4 | 5 | MUMPS |  | "I $P(^LAB(62.4 | DA | 0) | U | 4) | X=""SEQN"" S ^LRO(68.2 | ""AS"" | $P(^(0) | U | 4) | DA)=""""" | "I X=""SEQN"" K ^LRO(68.2 | ""AS"" | +$P(^LAB(62.4 | DA | 0) | U | 4) | DA)" | 1 |  |  |  | 
446 | 62.4 | 98 | MUMPS |  | "S:X ^LAB(62.4 | ""AE"" | DA | X)=""""" | "K ^LAB(62.4 | ""AE"" | DA)" | 1 |  |  |  | 
447 | 62.483 | 0.01 | MUMPS |  | "N Y X ^%ZOSF(""LPC"") S ^LAHM(62.48 | ""C"" | $E(X | 1 | 27)_Y | DA(1))=""""" | "N Y X ^%ZOSF(""LPC"") K ^LAHM(62.48 | ""C"" | $E(X | 1 | 27)_Y | DA(1))" | 1 |  |  |  | 
448 | 62.49 | 4 | MUMPS |  | "S ^LAHM(62.49 | ""AD"" | $P(X | ""."") | DA)=""""" | "K ^LAHM(62.49 | ""AD"" | $P(X | ""."") | DA)" | 1 |  |  |  | 
449 | 62.8 | 0.03 | MUMPS |  | "I X | X<3 | $P($G(^LAHM(62.8 | DA | 0)) | ""^"" | 2) S ^LAHM(62.8 | ""AC1"" | $P(^LAHM(62.8 | DA | 0) | ""^"" | 2) | DA)=""""" | "I X | X<3 | $P($G(^LAHM(62.8 | DA | 0)) | ""^"" | 2) K ^LAHM(62.8 | ""AC1"" | $P(^LAHM(62.8 | DA | 0) | ""^"" | 2) | DA)" | 1 |  |  |  | 
450 | 62.85 | 0.07 | MUMPS |  | D ADT^LREVENT | D KADT^LREVENT | 1 |  |  |  | 
451 | 62.85 | 0.07 | MUMPS |  | D ATST1^LREVENT | D KATST1^LREVENT | 1 |  |  |  | 
452 | 62.85 | 0.08 | MUMPS |  | D ATST^LREVENT | D KATST^LREVENT | 1 |  |  |  | 
453 | 62.85 | 0.09 | MUMPS |  | "I $L($P(^LAHM(62.85 | DA | 0) | ""^"")) S ^LAHM(62.85 | ""AM"" | $P(^LAHM(62.85 | DA | 0) | ""^"") | X | DA)=""""" | "I $L($P(^LAHM(62.85 | DA | 0) | ""^"")) K ^LAHM(62.85 | ""AM"" | $P(^LAHM(62.85 | DA | 0) | ""^"") | X | DA)" | 1 |  |  |  | 
454 | 63 | 11 | MUMPS |  | "S ^LR(""AAU"" | X | DA)=""""" | "K ^LR(""AAU"" | X | DA)" | 1 |  |  |  | 
455 | 63 | 14 | MUMPS |  | "S ^LR(""AAUA"" | $E(+^LR(DA | ""AU"") | 1 | 3) | $P(X | "" "") | $P(X | "" "" | 3) | DA)=""""" | "K ^LR(""AAUA"" | $E(+^LR(DA | ""AU"") | 1 | 3) | $P(X | "" "") | $P(X | "" "" | 3) | DA)" | 1 |  |  |  | 
456 | 63.017 | 0.11 | MUMPS |  | "S ^LR(""AB"" | DA(1) | X | DA)=""""" | "K ^LR(""AB"" | DA(1) | X | DA)" | 1 |  |  |  | 
457 | 63.0171 | 0.02 | MUMPS |  | "S ^LR(""AR"" | DA(1) | X | DA)=""""" | "K ^LR(""AR"" | DA(1) | X | DA)" | 1 |  |  |  | 
458 | 63.02 | 0.1 | MUMPS |  | "S ^LR(""AEM"" | $E(X | 1 | 30) | DA(1) | DA)=""""" | "K ^LR(""AEM"" | $E(X | 1 | 30) | DA(1) | DA)" | 1 |  |  |  | 
459 | 63.041 | 0.01 | MUMPS |  | Q | D AC1^LRXREF | 1 |  |  |  | 
460 | 63.08 | 0.11 | MUMPS |  | D ADD^LRWOMEN | D DEL^LRWOMEN | 1 |  |  |  | 
461 | 63.09 | 0.1 | MUMPS |  | "S ^LR(""ACY"" | $E(X | 1 | 30) | DA(1) | DA)=""""" | "K ^LR(""ACY"" | $E(X | 1 | 30) | DA(1) | DA)" | 1 |  |  |  | 
462 | 63.09 | 0.11 | MUMPS |  | D ADD^LRWOMEN | D DEL^LRWOMEN | 1 |  |  |  | 
463 | 63.3 | 0.01 | MUMPS |  | "I $P(^LAB(61.2 | X | 0) | ""^"" | 9) S ^LR(""AD"" | DT | X | $P(^LR(DA(2) | ""MI"" | DA(1) | 0) | ""^"" | 6)_"" "")=DA(2)" | "I $P(^LAB(61.2 | X | 0) | ""^"" | 9) K ^LR(""AD"" | DT | X | $P(^LR(DA(2) | ""MI"" | DA(1) | 0) | ""^"" | 6)_"" "")" | 1 |  |  |  | 
464 | 63.34 | 0.01 | MUMPS |  | "I $P(^LAB(61.2 | X | 0) | ""^"" | 9) S ^LR(""AD"" | DT | X | $P(^LR(DA(2) | ""MI"" | DA(1) | 0) | ""^"" | 6)_"" "")=DA(2)" | "I $P(^LAB(61.2 | X | 0) | ""^"" | 9) K ^LR(""AD"" | DT | X | $P(^LR(DA(2) | ""MI"" | DA(1) | 0) | ""^"" | 6)_"" "")" | 1 |  |  |  | 
465 | 63.34 | 0.01 | MUMPS |  | D ENDIY^LRCAPV1 |  | 1 |  |  |  | 
466 | 63.37 | 0.01 | MUMPS |  | "I $P($G(^LAB(61.2 | +X | 0)) | ""^"" | 9) S ^LR(""AD"" | DT | +X | $P(^LR(DA(2) | ""MI"" | DA(1) | 0) | ""^"" | 6)_"" "")=DA(2)" | "I $P($G(^LAB(61.2 | +X | 0)) | ""^"" | 9) K ^LR(""AD"" | DT | +X | $P(^LR(DA(2) | ""MI"" | DA(1) | 0) | ""^"" | 6)_"" "")" | 1 |  |  |  | 
467 | 63.37 | 0.01 | MUMPS |  | D ENDIY^LRCAPV1 |  | 1 |  |  |  | 
468 | 63.39 | 0.01 | MUMPS |  | "I $P(^LAB(61.2 | X | 0) | ""^"" | 9) S ^LR(""AD"" | DT | X | $P(^LR(DA(2) | ""MI"" | DA(1) | 0) | ""^"" | 6)_"" "")=DA(2)" | "I $P(^LAB(61.2 | X | 0) | ""^"" | 9) K ^LR(""AD"" | DT | X | $P(^LR(DA(2) | ""MI"" | DA(1) | 0) | ""^"" | 6)_"" "")" | 1 |  |  |  | 
469 | 63.39 | 0.01 | MUMPS |  | D ENDIY^LRCAPV1 |  | 1 |  |  |  | 
470 | 63.43 | 0.01 | MUMPS |  | "I $P(^LAB(61.2 | X | 0) | ""^"" | 9) S ^LR(""AD"" | DT | X | $P(^LR(DA(2) | ""MI"" | DA(1) | 0) | ""^"" | 6)_"" "")=DA(2)" | "I $P(^LAB(61.2 | X | 0) | ""^"" | 9) K ^LR(""AD"" | DT | X | $P(^LR(DA(2) | ""MI"" | DA(1) | 0) | ""^"" | 6)_"" "")" | 1 |  |  |  | 
471 | 63.43 | 0.01 | MUMPS |  | D ENDIY^LRCAPV1 |  | 1 |  |  |  | 
472 | 63.9999 | 0.03 | MUMPS |  | "S %=^LAR(""Z"" | DA | 0) | %=@(^DIC(+$P(% | U | 2) | 0 | ""GL"")_(+X)_"" | 0)"") | ^LAR(""NAME"" | $P(% | U | 1)
 | DA)="""" | ^LAR(""SSN"" | $P(% | U | 9) | DA)=""""" | "S %=^LAR(""Z"" | DA | 0) | %=@(^DIC(+$P(% | U | 2) | 0 | ""GL"")_(+X)_"" | 0)"") K ^LAR(""NAME"" | $P(% | U | 1) | DA) | ^LAR(""SSN"" | $P(% | U | 9) | DA)" | 1 |  |  |  | 
473 | 63.9999041 | 0.01 | MUMPS |  | Q | D AC1^LRXREF | 1 |  |  |  | 
474 | 64 | 0.01 | MUMPS |  | "D UP^LRXREF S ^LAM(""D"" | X | DA)=""""" | "D UP^LRXREF K ^LAM(""D"" | X | DA)" | 1 |  |  |  | 
475 | 64 | 0.01 | MUMPS |  | "S ^LAM(""VR"")=$G(^LAM(""VR""))" |  | 1 |  |  |  | 
476 | 64 | 14 | MUMPS |  | "S ^LAM(""AF"" | $P(^LAM(DA | 0) | U | 2) | DA)=""""" | "K ^LAM(""AF"" | $P(^LAM(DA | 0) | U | 2) | DA)" | 1 |  |  |  | 
477 | 64 | 14 | MUMPS |  | "S ^LAM(""AG"" | DA | $P(^LAM(DA | 0) | U | 2))=""""" | "K ^LAM(""AG"" | DA | $P(^LAM(DA | 0) | U | 2))" | 1 |  |  |  | 
478 | 64.018 | 5 | MUMPS |  | "S ^LAM(""AD"" | DA(1) | X | DA)=""""" | "K ^LAM(""AD"" | DA(1) | X | DA)" | 1 |  |  |  | 
479 | 64.019 | 0.01 | MUMPS |  | "D UP^LRXREF S ^LAM(""G"" | X | DA(1) | DA)=""""" | "D UP^LRXREF K ^LAM(""G"" | X | DA(1) | DA)" | 1 |  |  |  | 
480 | 64.02 | 4 | MUMPS |  | "S ^LAM(""AJ"" | DA(2) | DA(1) | DA | $E(X | 1 | 30))=""""" | "K ^LAM(""AJ"" | DA(2) | DA(1) | DA | $E(X | 1 | 30))" | 1 |  |  |  | 
481 | 64.023 | 0.01 | MUMPS |  | "S ^LAM(""AE"" | $P(X | "";"" | 2) | $P(X | "";"") | DA(1))=""""" | "K ^LAM(""AE"" | $P(X | "";"" | 2) | $P(X | "";"") | DA(1))" | 1 |  |  |  | 
482 | 64.061 | 0.01 | MUMPS |  | "S ^LAB(64.061 | ""B"" | $E(X | 1 | 70) | DA)=""""" | "K ^LAB(64.061 | ""B"" | $E(X | 1 | 70) | DA)" | 1 |  |  |  | 
483 | 64.061 | 0.01 | MUMPS |  | "D UP^LRXREF S ^LAB(64.061 | ""C"" | X | DA)=""""" | "D UP^LRXREF K ^LAB(64.061 | ""C"" | X | DA)" | 1 |  |  |  | 
484 | 64.061 | 0.01 | MUMPS |  | "S ^LAB(64.061 | ""VR"")=$G(^LAB(64.061 | ""VR""))" |  | 1 |  |  |  | 
485 | 64.061 | 1 | MUMPS |  | "S ^LAB(64.061 | ""E"" | X | DA)=""""" | "K ^LAB(64.061 | ""E"" | X | DA)" | 1 |  |  |  | 
486 | 64.062 | 0.01 | MUMPS |  | "S ^LAB(64.062 | ""C"" | $$UP^XLFSTR(X) | DA)=""""" | "K ^LAB(64.062 | ""C"" | $$UP^XLFSTR(X) | DA)" | 1 |  |  |  | 
487 | 64.2 | 0.01 | MUMPS |  | "S ^LAB(64.2 | ""VR"")=$G(^LAB(64.2 | ""VR""))" |  | 1 |  |  |  | 
488 | 64.21 | 0.01 | MUMPS |  | "D UP^LRXREF S ^LAB(64.21 | ""E"" | X | DA)=""""" | "D UP^LRXREF K ^LAB(64.21 | ""E"" | X | DA)" | 1 |  |  |  | 
489 | 64.21 | 0.01 | MUMPS |  | "S ^LAB(64.21 | ""VR"")=$G(^LAB(64.21 | ""VR""))" |  | 1 |  |  |  | 
490 | 64.22 | 0.01 | MUMPS |  | "S ^LAB(64.22 | ""VR"")=$G(^LAB(64.22 | ""VR""))" |  | 1 |  |  |  | 
491 | 64.22 | 1 | MUMPS |  | "D UP^LRXREF S ^LAB(64.22 | ""D"" | X | DA)=""""" | "D UP^LRXREF K ^LAB(64.22 | ""D"" | X | DA)" | 1 |  |  |  | 
492 | 64.3 | 0.01 | MUMPS |  | "S ^LAB(64.3 | ""VR"")=$G(^LAB(64.3 | ""VR""))" |  | 1 |  |  |  | 
493 | 64.52 | 1 | MUMPS |  | "S ^LAB(64.5 | ""AZ"" | DA(1) | DA)=""""" |  | 1 |  |  |  | 
494 | 64.52 | 2 | MUMPS |  | "S ^LAB(64.5 | ""AZ"" | DA(1) | DA)=""""" |  | 1 |  |  |  | 
495 | 64.53 | 0.01 | MUMPS |  | "S ^LAB(64.5 | ""AR"" | $P(^LAB(64.5 | DA(3) | 1 | DA(2) | 1 | DA(1) | 0) | ""^"" | 2) | $P(^(1 | DA | 0) | ""^"" | 1))=""""" | "K ^LAB(64.5 | ""AR"" | $P(^LAB(64.5 | DA(3) | 1 | DA(2) | 1 | DA(1) | 0) | ""^"" | 2) | $P(^(1 | DA | 0) | ""^"" | 1))" | 1 |  |  |  | 
496 | 64.53 | 0.01 | MUMPS |  | "S LRSUB=$P(^LAB(60 | +X | 0) | U | 5) | LRTST=$S($L(LRSUB):$O(^LAB(60 | ""C"" | LRSUB | 0)) | 1:-1) S ^LAB(64.5 | ""A"" | DA(3) | DA(2) | DA(1) | DA)=$S($D(^LAB(60 | LRTST | 1 | $P(^LAB(64.5 | DA(3) | 1 | DA(2) | 1 | DA(1) | 0) | U | 2) | 0)):^(0) | 1:"""") K LRSUB | LRTST" | "K ^LAB(64.5 | ""A"" | DA(3) | DA(2) | DA(1) | DA)" | 1 |  |  |  | 
497 | 64.53 | 0.01 | MUMPS |  | "S ^LAB(64.5 | ""AZ"" | DA(2) | DA(1))=""""" |  | 1 |  |  |  | 
498 | 64.53 | 4 | MUMPS |  | "S ^LAB(64.5 | ""AC"" | +$P($P(^LAB(64.5 | DA(3) | 1 | DA(2) | 1 | DA(1) | 1 | DA | 0) | ""^"" | 5) | "";"" | 2) | DA(3) | DA(2) | DA(1) | DA)=$P(^LAB(64.5 | DA(3) | 1 | DA(2) | 1 | DA(1) | 0) | U | 2)" | "K ^LAB(64.5 | ""AC"" | +$P($P(^LAB(64.5 | DA(3) | 1 | DA(2) | 1 | DA(1) | 1 | DA | 0) | ""^"" | 5) | "";"" | 2) | DA(3) | DA(2) | DA(1) | DA)" | 1 |  |  |  | 
499 | 64.6 | 1 | MUMPS |  | "S:X ^LAB(64.6 | ""AS"" | $P(^LAB(64.6 | DA | 0) | U | 6) | DA)=""""" | "K ^LAB(64.6 | ""AS"" | $P(^LAB(64.6 | DA | 0) | U | 6) | DA)" | 1 |  |  |  | 
500 | 64.6 | 2 | MUMPS |  | "S:X ^LAB(64.6 | ""AI"" | $P(^LAB(64.6 | DA | 0) | U | 6) | DA)=""""" | "K ^LAB(64.6 | ""AI"" | $P(^LAB(64.6 | DA | 0) | U | 6) | DA)" | 1 |  |  |  | 
501 | 64.701 | 0.01 | MUMPS |  | "I $D(^LAC(""LRAC"" | DA(1) | 1 | DA | .5)) | $P(^(.5) | ""^"" | 1)=1 S ^LAC(""LGOT"" | DA(1) | DA)=""""" |  | 1 |  |  |  | 
502 | 64.701 | 0.01 | MUMPS |  | "Q  ;S ^LAC(""LGOT"" | LRDFN | LRMH)="""" SET BY PROGRAM (Patient | major header)" |  | 1 |  |  |  | 
503 | 64.702 | 0.01 | MUMPS |  | "I $D(^LAC(""LRAC"" | DA(1) | ""MISC"" | 1 | .5)) | $P(^(.5) | ""^"" | 1)=1 S ^LAC(""LGOT"" | DA(1) | ""MISC"")=""""" |  | 1 |  |  |  | 
504 | 64.704 | 0.01 | MUMPS |  | D LRKILL^LRXREF | D LRKILL^LRXREF | 1 |  |  |  | 
505 | 64.705 | 2 | MUMPS |  | D LRKILL^LRXREF | D LRKILL^LRXREF | 1 |  |  |  | 
506 | 64.708 | 4 | MUMPS |  | D LRKILL^LRXREF | D LRKILL^LRXREF | 1 |  |  |  | 
507 | 65 | 0.01 | MUMPS |  | "S Y=^LRD(65 | DA | 0) I $P(Y | U | 4) | $P(Y | U | 6) | $P($G(^LRD(65 | DA | 4)) | U)="""" S ^LRD(65 | ""AI"" | $P(Y | U | 4) | X | $P(Y | U | 6) | DA)=""""" | "S Y=^LRD(65 | DA | 0) I $P(Y | U | 4) | $P(Y | U | 6) K ^LRD(65 | ""AI"" | $P(Y | U | 4) | X | $P(Y | U | 6) | DA)" | 1 |  |  |  | 
508 | 65 | 0.01 | MUMPS |  | "S:'$D(^LRD(65 | DA | 10)) (^LRD(65 | ""AT"" | X | 10 | DA) | ^LRD(65 | ""AT"" | X | 11 | DA))="""" I '$D(^LR
D(65 | DA | 4)) F Z=0:0 S Z=$O(^LRD(65 | DA | 2 | Z)) Q:Z<1  S:$P(^(Z | 0) | U | 2) ^LRD(65 | ""AP""
 | Z | DA)=""""" | "K ^LRD(65 | ""AT"" | X) F Z=0:0 S Z=$O(^LRD(65 | DA | 2 | Z)) Q:Z<1  K ^LRD(65 | ""AP"" | Z | DA)" | 1 |  |  |  | 
509 | 65 | 0.01 | MUMPS |  | D S^LRBLU | D K^LRBLU | 1 |  |  |  | 
510 | 65 | 0.02 | MUMPS |  | D S^LRBLU | D K^LRBLU | 1 |  |  |  | 
511 | 65 | 0.04 | MUMPS |  | "S Y=^LRD(65 | DA | 0) I $P(Y | U | 6) | $P($G(^LRD(65 | DA | 4)) | U)="""" S ^LRD(65 | ""AI"" | X | $P(Y | U) | $P(Y | U | 6) | DA)=""""" |  | 1 |  |  |  | 
512 | 65 | 0.04 | MUMPS |  | "S Y=$P(^LRD(65 | DA | 0) | U | 6) I Y | $P($G(^LRD(65 | DA | 4)) | U)="""" S ^LRD(65 | ""AE"" | X | Y | DA)=""""" |  | 1 |  |  |  | 
513 | 65 | 0.04 | MUMPS |  | D S^LRBLU | D K^LRBLU | 1 |  |  |  | 
514 | 65 | 0.05 | MUMPS |  | "S ^LRD(65 | ""A"" | $E(X | 1 | 30) | DA)="""" D:$D(DIU(0)) A65^LRXREF1" | "K ^LRD(65 | ""A"" | $E(X | 1 | 30) | DA)" | 1 |  |  |  | 
515 | 65 | 0.06 | MUMPS |  | "I $P(^LRD(65 | DA | 0) | U | 4) | $P($G(^LRD(65 | DA | 4)) | U)="""" S ^LRD(65 | ""AE"" | $P(^LRD(65 | DA | 0) | U | 4) | X | DA)=""""" |  | 1 |  |  |  | 
516 | 65 | 0.06 | MUMPS |  | "S Y=^LRD(65 | DA | 0) I $P(Y | U | 4) | $P($G(^LRD(65 | DA | 4)) | U)="""" S ^LRD(65 | ""AI"" | $P(Y | U | 4) | $P(Y | U) | X | DA)=""""" |  | 1 |  |  |  | 
517 | 65 | 4.1 | MUMPS |  | D S1^LRBLU | "I '$D(DIU(0)) | $D(^LRD(65 | DA | 6)) D K1^LRBLU" | 1 |  |  |  | 
518 | 65 | 5 | MUMPS |  | "S ^LRD(65 | ""AE"" | $P(^LRD(65 | DA | 0) | U | 4) | X | DA)=""""" | "K ^LRD(65 | ""AE"" | $P(^LRD(65 | DA | 0) | U | 4) | X | DA)" | 1 |  |  |  | 
519 | 65.01 | 0.01 | MUMPS |  | "S Y=$S('$D(^LRD(65 | DA(1) | 4)):1 | '$L($P(^(4) | U)):1 | 1:0) I Y S Y=$S('$D(^(2 | DA | 0)):
1 | $P(^(0) | U | 2):1 | 1:0) S:Y ^LRD(65 | ""AP"" | DA | DA(1))=""""" | "K ^LRD(65 | ""AP"" | DA | DA(1))" | 1 |  |  |  | 
520 | 65.01 | 0.02 | MUMPS |  | "S Y=$S('$D(^LRD(65 | DA(1) | 4)):1 | '$L($P(^(4) | U | 1)):1 | 1:"""") S:Y ^LRD(65 | ""AP"" | DA | DA(
1))=""""" | "K ^LRD(65 | ""AP"" | DA | DA(1))" | 1 |  |  |  | 
521 | 65.03 | 0.01 | MUMPS |  | "S ^LRD(65 | ""AL"" | X | DA(1))=""""" | "K ^LRD(65 | ""AL"" | X | DA(1))" | 1 |  |  |  | 
522 | 65.15 | 0.08 | MUMPS |  | "S ^LRD(65 | ""A"" | X | DA(1))="""" D:$D(DIU(0)) A658^LRXREF1" | "K ^LRD(65 | ""A"" | X | DA(1))" | 1 |  |  |  | 
523 | 65.31 | 0.01 | MUMPS |  | "S A=$P(^LRD(65 | DA(2) | 99 | DA(1) | 1 | DA | 0) | U | 3) I 'A S ^LRD(65 | ""AA"" | DA(2) | DA(1) | DA)=$P(^LRD(65 | DA(2) | 0) | U)" | "K ^LRD(65 | ""AA"" | DA(2) | DA(1) | DA)" | 1 |  |  |  | 
524 | 65.5 | 0.01 | MUMPS |  | "Q:'$P(^LRE(DA | 0) | U | 3)  S ^LRE(""D"" | $E(X | 1)_$E($P(^(0) | U | 3) | 4 | 7) | DA)=""""" | "Q:'$P(^LRE(DA | 0) | U | 3)  K ^LRE(""D"" | $E(X | 1)_$E($P(^(0) | U | 3) | 4 | 7) | DA)" | 1 |  |  |  | 
525 | 65.5 | 0.01 | MUMPS |  | "Q:'$P(^LRE(DA | 0) | U | 13)  S P=$S($P(^(0) | U | 13)[""P"":11 | 1:10) S ^LRE(""G4"" | $E(^(0))_$E($P(^(0) | U | 13) | 6 | P) | DA)=""""" | "Q:'$P(^LRE(DA | 0) | U | 13)  S P=$S($P(^(0) | U | 13)[""P"":11 | 1:10) K ^LRE(""G4"" | $E(^(0))_$E($P(^(0) | U | 13) | 6 | P) | DA)" | 1 |  |  |  | 
526 | 65.5 | 0.03 | MUMPS |  | "S ^LRE(""D"" | $E(^LRE(DA | 0))_$E(X | 4 | 7) | DA)=""""" | "K ^LRE(""D"" | $E(^LRE(DA | 0))_$E(X | 4 | 7) | DA)" | 1 |  |  |  | 
527 | 65.5 | 0.13 | MUMPS |  | "S P=$S(X[""P"":11 | 1:10) S ^LRE(""G4"" | $E(^LRE(DA | 0))_$E(X | 6 | P) | DA)=""""" | "S P=$S(X[""P"":11 | 1:10) K ^LRE(""G4"" | $E(^LRE(DA | 0))_$E(X | 6 | P) | DA)" | 1 |  |  |  | 
528 | 65.54 | 0.01 | MUMPS |  | "S ^LRE(""AD"" | $P(X | ""."" | 1) | DA(1))=""""" | "K ^LRE(""AD"" | $P(X | ""."" | 1) | DA(1))" | 1 |  |  |  | 
529 | 65.54 | 4 | MUMPS |  | "F Z=9.99:0 S Z=$O(^DD(65.54 | Z)) Q:Z>65.99!('Z)  I Z#1=0 | '$D(^LRE(DA(1) | 5 | DA | Z)) S ^LRE(""AT"" | X | Z | DA(1) | DA)=""""" | "K ^LRE(""AT"" | X)" | 1 |  |  |  | 
530 | 65.54 | 4 | MUMPS |  | "S X(1)=$P(^LAB(69.9 | 1 | 0) | U | 18)+1 I X(1)>1 | $L(X)>4 S ^LRE(""C"" | $E(X | X(1) | $L(X)) | DA(1) | DA)=""""" |  | 1 |  |  |  | 
531 | 65.5991 | 0.01 | MUMPS |  | "S A=$P(^LRE(DA(3) | 5 | DA(2) | 99 | DA(1) | 1 | DA | 0) | U | 3) S:'A ^LRE(""AA"" | DA(3) | DA(2) | DA(1)
 | DA)=$P(^LRE(DA(3) | 5 | DA(2) | 0) | U | 4)" | "K ^LRE(""AA"" | DA(3) | DA(2) | DA(1) | DA)" | 1 |  |  |  | 
532 | 67 | 0.01 | MUMPS |  | "D UP^LRXREF S ^LRT(67 | ""D"" | X | DA)=""""" | "D UP^LRXREF K ^LRT(67 | ""D"" | X | DA)" | 1 |  |  |  | 
533 | 67.1 | 0.01 | MUMPS |  | "D UP^LRXREF S ^LRT(67.1 | ""D"" | X | DA)=""""" | "D UP^LRXREF K ^LRT(67.1 | ""D"" | X | DA)" | 1 |  |  |  | 
534 | 67.9114 | 0.01 | TRIGGER |  | "K DIV S DIV=X | D0=DA(3) | DIV(0)=D0 | D1=DA(2) | DIV(1)=D1 | D2=DA(1) | DIV(2)=D2 | D3=DA | DIV(3)=D3 S Y(1)=$S($D(^LRO(67.9 | D0 | 1 | D1 | 1 | D2 | 1 | D3 | 0)):^(0) | 1:"""") S X=$P(Y(1) | U | 9) | X=X S DIU=X K Y S X=DIV D TRIG^LRXREF X ^DD(67.9114 | .01 | 1 | 2 | 1.4)" |  | 1 |  |  |  | 
535 | 67.91148 | 0.01 | TRIGGER |  | "X ^DD(67.91148 | .01 | 1 | 2 | 1.3) S Y(1)=$S($D(^LRO(67.9 | D0 | 1 | D1 | 1 | D2 | 1 | D3 | 1 | D4 | 0)):^(0) | 1:"""") S X=$P(Y(1) | U | 3) | X=X S DIU=X K Y S X=DIV D TRIGTS^LRXREF X ^DD(67.91148 | .01 | 1 | 2 | 1.4)" |  | 1 |  |  |  | 
536 | 68.02 | 13 | MUMPS |  | D AC^LRXREF1 | D AC1^LRXREF1 | 1 |  |  |  | 
537 | 68.02 | 93 | MUMPS |  | "I $D(^LRO(68 | DA(2) | 1 | DA(1) | DA | 0)) | $P(^(0) | U | 12) S ^(""AE"")=""""" | "I $D(^LRO(68 | DA(2) | 1 | DA(1) | DA | 0)) | '$P(^(0) | U | 12) K ^(""AE"")" | 1 |  |  |  | 
538 | 68.04 | 4 | MUMPS |  | "S ^LRO(68 | DA(3) | 1 | DA(2) | 1 | ""AC"" | X | DA(1))=""""" | "K ^LRO(68 | DA(3) | 1 | DA(2) | 1 | ""AC"" | X | DA(1))" | 1 |  |  |  | 
539 | 68.04 | 4 | MUMPS |  | "S ^LRO(68 | DA(3) | 1 | DA(2) | 1 | ""AD"" | +$P(X | ""."" | 1) | DA(1))=""""" | "K ^LRO(68 | DA(3) | 1 | DA(2) | 1 | ""AD"" | +$P(X | ""."" | 1) | DA(1))" | 1 |  |  |  | 
540 | 68.04 | 4 | MUMPS |  | "S A=$P(^LRO(68 | DA(3) | 1 | DA(2) | 1 | DA(1) | 4 | DA | 0) | U | 7) S:'A ^LRO(68 | ""AA"" | DA(3)_""|""_DA(2)_""|""_DA(1)_""|""_DA)=""""" | "K ^LRO(68 | ""AA"" | DA(3)_""|""_DA(2)_""|""_DA(1)_""|""_DA)" | 1 |  |  |  | 
541 | 68.24 | 0.01 | MUMPS |  | "S LRINST=DA(2) | LRPROF=DA(1) D BUILD^LRLLP4" | "K ^LRO(68.2 | DA(2) | 10 | DA(1) | 1 | ""AO"")" | 1 |  |  |  | 
542 | 68.24 | 2 | MUMPS |  | "K ^LRO(68.2 | DA(2) | 10 | DA(1) | 1 | ""AO"") ;D BUILD^LRLLP4" | "K ^LRO(68.2 | DA(2) | 10 | DA(1) | 1 | ""AO"")" | 1 |  |  |  | 
543 | 69.01 | 0.01 | MUMPS |  | "S ^LRO(69 | ""D"" | $E(X | 1 | 30) | DA(1) | DA)=""""" | "K ^LRO(69 | ""D"" | $E(X | 1 | 30) | DA(1) | DA)" | 1 |  |  |  | 
544 | 69.01 | 8 | MUMPS |  | "I $P(^LRO(69 | DA(1) | 1 | DA | 0) | U | 4)=""LC"" S ^LRO(69 | DA(1) | 1 | ""AD"" | $E(X | 1 | 30) | $P(^LRO(69 | DA(1) | 1 | DA | 0) | U | 1) | DA)=""""" | "K ^LRO(69 | DA(1) | 1 | ""AD"" | $E(X | 1 | 30) | $P(^LRO(69 | DA(1) | 1 | DA | 0) | U | 1) | DA)" | 1 |  |  |  | 
545 | 69.01 | 9.5 | MUMPS |  | D C^LRXREF1 | "K ^LRO(69 | ""C"" | +X | DA(1) | DA)" | 1 |  |  |  | 
546 | 69.01 | 13 | MUMPS |  | "S:'$P(^LRO(69 | DA(1) | 1 | DA | 0) | U | 10) ^LRO(69 | ""AA"" | DA(1)_""|""_DA)=""""" | "K ^LRO(69 | ""AA"" | DA(1)_""|""_DA)" | 1 |  |  |  | 
547 | 69.01 | 21 | MUMPS |  | D AR2^LRXREF | D AR3^LRXREF | 1 |  |  |  | 
548 | 69.01 | 21 | MUMPS |  | D AP1^LRXREF | D AP2^LRXREF | 1 |  |  |  | 
549 | 69.01 | 21 | MUMPS |  | D AL1^LRXREF | D AL2^LRXREF | 1 |  |  |  | 
550 | 69.01 | 21 | MUMPS |  | D AN1^LRXREF | D AN2^LRXREF | 1 |  |  |  | 
551 | 69.01 | 21 | MUMPS |  | "S ^LRO(69 | DA(1) | 1 | ""AN"" | $E($P(^LRO(69 | DA(1) | 1 | DA | 0) | U | 7) | 1 | 20) | $P(^(0) | U | 1) | 9999999-$P(^LRO(69 | DA(1) | 1 | DA | 1) | U | 1))=""""" | "K ^LRO(69 | DA(1) | 1 | ""AN"" | $E($P(^LRO(69 | DA(1) | 1 | DA | 0) | U | 7) | 1 | 20) | $P(^(0) | U | 1) | 9999999-$P(^LRO(69 | DA(1) | 1 | DA | 1) | U | 1))" | 1 |  |  |  | 
552 | 69.03 | 0.01 | MUMPS |  | "D AT^LRXREF1 ;  S ^LRO(69 | ""AT"" | LRDFN | LRTEST | LRSPEC | LRODT)=""This is used for maximum test order frequency."" | ^(-LRODT)=""""" | "D ATD^LRXREF1 ;  K ^LRO(69 | ""AT"" | LRDFN | LRTEST | LRSPEC | LRODT) | ^(-LRODT)" | 1 |  |  |  | 
553 | 69.03 | 10 | MUMPS |  | "S:'$D(^LRO(69 | DA(2) | 1 | DA(1) | ""PCE"")) ^LRO(69 | ""AE"" | $E(X | 1 | 30) | DA(2) | DA(1) | DA)=""""" | "K ^LRO(69 | ""AE"" | $E(X | 1 | 30) | DA(2) | DA(1) | DA)" | 1 |  |  |  | 
554 | 69.11 | 0.01 | MUMPS |  | "S ^LRO(69.1 | ""LRPH"" | 1 | $P(^LRO(69.1 | DA(1) | 1 | DA | 0) | U | 2) | $P(^(0) | U | 3) | $P(^(0) | U | 4) | $P(^(0) | U | 5) | $P(^(0) | U | 10) | $P(^(0) | U | 11) | $P(^(0) | U | 1))=$P(^(0) | U | 1)" | "K ^LRO(69.1 | ""LRPH"" | 1 | $P(^LRO(69.1 | DA(1) | 1 | DA | 0) | U | 2) | $P(^(0) | U | 3) | $P(^(0) | U | 4) | $P(^(0) | U | 5) | $P(^(0) | U | 10) | $P(^(0) | U | 11) | $P(^(0) | U | 1))" | 1 |  |  |  | 
555 | 69.11 | 4 | MUMPS |  | "S ^LRO(69.1 | ""LRPH"" | 1 | $P(^LRO(69.1 | DA(1) | 1 | DA | 0) | U | 2) | $P(^(0) | U | 3) | $P(^(0) | U | 4) | $P(^(0) | U | 5))=$P(^(0) | U | 6)_""^""_""LC""_""^""_$P(^(0) | U | 8)_""^""_$P(^(0) | U | 9)_""^""_DA" | "K ^LRO(69.1 | ""LRPH"" | 1 | $P(^LRO(69.1 | DA(1) | 1 | DA | 0) | U | 2) | $P(^(0) | U | 3) | $P(^(0) | U | 4) | $P(^(0) | U | 5))" | 1 |  |  |  | 
556 | 69.5 | 0.01 | MUMPS |  | "D UP^LRXREF S ^LAB(69.5 | ""D"" | X | DA)=""""" | "D UP^LRXREF K ^LAB(69.5 | ""D"" | X | DA)" | 1 |  |  |  | 
557 | 69.6 | 2 | MUMPS |  | "S ^LRO(69.6 | ""AC"" | $P(^LRO(69.6 | DA | 0) | U | 4) | $P(^(0) | U | 5) | DA)=""""" | "K ^LRO(69.6 | ""AC"" | $P(^LRO(69.6 | DA | 0) | U | 4) | $P(^(0) | U | 5) | DA)" | 1 |  |  |  | 
558 | 69.6 | 2 | MUMPS |  | "S ^LRO(69.6 | ""AE"" | $P(^LRO(69.6 | DA | 0) | U | 5) | DA)=""""" | "K ^LRO(69.6 | ""AE"" | $P(^LRO(69.6 | DA | 0) | U | 5) | DA)" | 1 |  |  |  | 
559 | 69.6 | 3 | MUMPS |  | "S LRX=$P(^LRO(69.6 | DA | 0) | U | 14) I $L(LRX) S ^LRO(69.6 | ""AD"" | LRX | X | DA)=""""" | "S LRX=$P(^LRO(69.6 | DA | 0) | U | 14) I $L(LRX) K ^LRO(69.6 | ""AD"" | LRX | X | DA)" | 1 |  |  |  | 
560 | 69.6 | 18 | MUMPS |  | "S LRX=$P(^LRO(69.6 | DA | 0) | U | 6) I $L(LRX) S ^LRO(69.6 | ""AD"" | X | LRX | DA)=""""" | "S LRX=$P(^LRO(69.6 | DA | 0) | U | 6) I $L(LRX) K ^LRO(69.6 | ""AD"" | X | LRX | DA)" | 1 |  |  |  | 
561 | 69.9 | 500 | MUMPS |  | D FRI^LR7OV1(X=1) | D FRI^LR7OV1(X=1) | 1 |  |  |  | 
562 | 69.9 | 501 | MUMPS |  | D SAT^LR7OV1(X=1) | D SAT^LR7OV1(X=1) | 1 |  |  |  | 
563 | 69.9 | 502 | MUMPS |  | D SUN^LR7OV1(X=1) | D SUN^LR7OV1(X=1) | 1 |  |  |  | 
564 | 69.9 | 503 | MUMPS |  | D MON^LR7OV1(X=1) | D MON^LR7OV1(X=1) | 1 |  |  |  | 
565 | 69.9 | 504 | MUMPS |  | D TUES^LR7OV1(X=1) | D TUES^LR7OV1(X=1) | 1 |  |  |  | 
566 | 69.9 | 505 | MUMPS |  | D WED^LR7OV1(X=1) | D WED^LR7OV1(X=1) | 1 |  |  |  | 
567 | 69.9 | 506 | MUMPS |  | D THURS^LR7OV1(X=1) | D THURS^LR7OV1(X=1) | 1 |  |  |  | 
568 | 69.9 | 507 | MUMPS |  | D HOL^LR7OV1(X) | "D HOL^LR7OV1("""")" | 1 |  |  |  | 
569 | 69.9001 | 0.01 | MUMPS |  | Q | "Q:'$$XPARCK^LR7OV2  I $L($P($G(^LAB(69.9 | DA(1) | 4 | DA | 0)) | ""^"" | 4)) N X D DEL^XPAR($$DIV^LR7OV1($P(^(0) | ""^"" | 4)) | ""LR PHLEBOTOMY COLLECTION"" | DA)" | 1 |  |  |  | 
570 | 69.9001 | 1 | MUMPS |  | "I $P($G(^LAB(69.9 | DA(1) | 4 | DA | 0)) | ""^"" | 4) D COLTIM^LR7OV1($P(^(0) | ""^"" | 4) | DA | X)" | "Q:'$$XPARCK^LR7OV2  I $L($P($G(^LAB(69.9 | DA(1) | 4 | DA | 0)) | ""^"" | 4)) N X D DEL^XPAR($$DIV^LR7OV1($P(^(0) | ""^"" | 4)) | ""LR PHLEBOTOMY COLLECTION"" | DA)" | 1 |  |  |  | 
571 | 69.9001 | 3 | MUMPS |  | "I $L($P($G(^LAB(69.9 | DA(1) | 4 | DA | 0)) | ""^"" | 2)) D COLTIM^LR7OV1(X | DA | $P(^(0) | ""^"" | 2))" | "Q:'$$XPARCK^LR7OV2  D DEL^XPAR($$DIV^LR7OV1(X) | ""LR PHLEBOTOMY COLLECTION"" | DA)" | 1 |  |  |  | 
572 | 69.9004 | 0.01 | MUMPS |  | "S %=$P(^SC(X | 0) | U | 2) Q:'$L(%)  S ^LAB(69.9 | DA(1) | 2 | ""AC"" | %)=""""" | "S %=$P(^SC(X | 0) | U | 2) Q:'$L(%)  K ^LAB(69.9 | DA(1) | 2 | ""AC"" | %)" | 1 |  |  |  | 
573 | 69.9004 | 0.01 | MUMPS |  | "D EXCEPTED^LR7OV1(X | 1 | 1)" | "D EXCEPTED^LR7OV1(X | 1 | 0)" | 1 |  |  |  | 
574 | 69.99 | 0.01 | MUMPS |  | "I $G(^LAB(69.9 | DA(1) | 9 | DA | 0)) D MAXDAY^LR7OV1(X | 1 | $P(^(0) | ""^"" | 2))" | "I $G(^LAB(69.9 | DA(1) | 9 | DA | 0)) D MAXDAY^LR7OV1(X | 1 | """")" | 1 |  |  |  | 
575 | 69.99 | 0.01 | MUMPS |  | "I $G(^LAB(69.9 | DA(1) | 9 | DA | 0)) D URG^LR7OV1(X | 1 | $S($P(^(0) | ""^"" | 5):""YES"" | 1:""NO""))" | "D URG^LR7OV1(X | 1 | ""NO"")" | 1 |  |  |  | 
576 | 69.99 | 0.01 | MUMPS |  | "I $G(^LAB(69.9 | DA(1) | 9 | DA | 0)) D TYPE^LR7OV1(X | 1 | $P(^(0) | ""^"" | 6))" | "I $G(^LAB(69.9 | DA(1) | 9 | DA | 0)) D TYPE^LR7OV1(X | 1 | """")" | 1 |  |  |  | 
577 | 69.99 | 1 | MUMPS |  | "I $G(^LAB(69.9 | DA(1) | 9 | DA | 0)) D MAXDAY^LR7OV1($P(^(0) | ""^"") | 1 | X)" | "I $G(^LAB(69.9 | DA(1) | 9 | DA | 0)) D MAXDAY^LR7OV1($P(^(0) | ""^"") | 1 | """")" | 1 |  |  |  | 
578 | 69.99 | 4 | MUMPS |  | "I $G(^LAB(69.9 | DA(1) | 9 | DA | 0)) D URG^LR7OV1($P(^(0) | ""^"") | 1 | X)" | "I $G(^LAB(69.9 | DA(1) | 9 | DA | 0)) D URG^LR7OV1($P(^(0) | ""^"") | 1 | """")" | 1 |  |  |  | 
579 | 69.99 | 5 | MUMPS |  | "I $G(^LAB(69.9 | DA(1) | 9 | DA | 0)) D TYPE^LR7OV1($P(^(0) | ""^"") | 1 | X)" | "I $G(^LAB(69.9 | DA(1) | 9 | DA | 0)) D TYPE^LR7OV1($P(^(0) | ""^"") | 1 | """")" | 1 |  |  |  | 
580 | 95.11 | 7 | MUMPS |  | "S ^LAB(95.11 | ""O"" | X | +$P(^LAB(95.11 | DA | 0) | U | 2) | DA)=""""" | "K ^LAB(95.11 | ""O"" | X | +$P(^LAB(95.11 | DA | 0) | U | 2) | DA)" | 1 |  |  |  | 
581 | 95.3 | 0.01 | MUMPS |  | "S ^LAB(95.3 | ""VR"")=$G(^LAB(95.3 | ""VR""))" |  | 1 |  |  |  | 
582 | 95.3 | 99.99 | MUMPS |  | "S ^LAB(95.3 | ""AVUID"" | $E(X | 1 | 30) | DA)=""""" | "K ^LAB(95.3 | ""AVUID"" | $E(X | 1 | 30) | DA)" | 1 |  |  |  | 
583 | 95.31 | 0.01 | MUMPS |  | "S ^LAB(95.31 | ""B"" | $E(X | 1 | 120) | DA)=""""" | "K ^LAB(95.31 | ""B"" | $E(X | 1 | 120) | DA)" | 1 |  |  |  | 
584 | 95.31 | 0.01 | MUMPS |  | "S ^LAB(95.31 | ""VR"")=$G(^LAB(95.31 | ""VR""))" |  | 1 |  |  |  | 
585 | 95.42 | 0.01 | MUMPS |  | "S ^LAB(95.31 | DA(1) | 10 | ""B"" | $E(X | 1 | 60) | DA)=""""" | "K ^LAB(95.31 | DA(1) | 10 | ""B"" | $E(X | 1 | 60) | DA)" | 1 |  |  |  | 
586 | 550.04 | 0.01 | MUMPS |  | "S ^PSX(550 | ""AC"" | DA)=""""" | "K ^PSX(550 | ""AC"" | DA)" | 1 |  |  |  | 
587 | 550.07 | 0.01 | MUMPS |  | "S:X=1 ^PSX(550 | ""AT"" | DA)=""""" | "K ^PSX(550 | ""AT"" | DA)" | 1 |  |  |  | 
588 | 550.09 | 0.01 | MUMPS |  | "S:X=1 ^PSX(550 | ""ATC"" | DA)=""""" | "K ^PSX(550 | ""ATC"" | DA)" | 1 |  |  |  | 
589 | 550.1 | 1 | MUMPS |  | "S:X=1 ^PSX(550.1 | ""AS"" | DA)=""""" | "K ^PSX(550.1 | ""AS"" | DA)" | 1 |  |  |  | 
590 | 550.1 | 1 | MUMPS |  | "S:X=2 ^PSX(550.1 | ""AR"" | DA)=""""" | "K ^PSX(550.1 | ""AR"" | DA)" | 1 |  |  |  | 
591 | 550.1 | 1 | MUMPS |  | "S:X=3 ^PSX(550.1 | ""AB"" | DA)=""""" | "K ^PSX(550.1 | ""AB"" | DA)" | 1 |  |  |  | 
592 | 550.1 | 1 | MUMPS |  | "S:X=4 ^PSX(550.1 | ""AA"" | DA)=""""" | "K ^PSX(550.1 | ""AA"" | DA)" | 1 |  |  |  | 
593 | 550.1 | 1 | MUMPS |  | "S:X=5 ^PSX(550.1 | ""AX"" | DA)=""""" | "K ^PSX(550.1 | ""AX"" | DA)" | 1 |  |  |  | 
594 | 550.1 | 3 | MUMPS |  | "S:X'="""" ^PSX(550.1 | ""C"" | DA)=""""" | "K ^PSX(550.1 | ""C"" | X | DA)" | 1 |  |  |  | 
595 | 550.2 | 1 | MUMPS |  | "S:X=1 ^PSX(550.2 | ""AQ"" | DA)=""""" | "K ^PSX(550.2 | ""AQ"" | DA)" | 1 |  |  |  | 
596 | 550.2 | 1 | MUMPS |  | "S:X=2 ^PSX(550.2 | ""AX"" | DA)=""""" | "K ^PSX(550.2 | ""AX"" | DA)" | 1 |  |  |  | 
597 | 550.2 | 1 | MUMPS |  | "S:X=3 ^PSX(550.2 | ""AA"" | DA)=""""" | "K ^PSX(550.2 | ""AA"" | DA)" | 1 |  |  |  | 
598 | 550.2 | 1 | MUMPS |  | "S:X=4 ^PSX(550.2 | ""AC"" | DA)=""""" | "K ^PSX(550.2 | ""AC"" | DA)" | 1 |  |  |  | 
599 | 552 | 2 | MUMPS |  | ":$E(X)[""A"" ^PSX(552 | ""C"" | DA)=""""" | "K ^PSX(552 | ""C"" | DA)" | 1 |  |  |  | 
600 | 552.1 | 1 | MUMPS |  | "I $G(X)=""2"" S ^PSX(552.1 | ""AB"" | $P(^PSX(552.1 | DA | 0) | U | 1) | DA)="""" K:$P(^PSX(552.1 | DA | 0) | U | 4)'="""" ^PSX(552.1 | ""AQ"" | $P(^PSX(552.1 | DA | 0) | U | 4) | $P(^PSX(552.1 | DA | 0) | U | 1) | DA)" | "K ^PSX(552.1 | ""AB"" | $P(^PSX(552.1 | DA | 0) | U | 1) | DA)" | 1 |  |  |  | 
601 | 552.1 | 1 | MUMPS |  | "I $G(X)=""1"" S ^PSX(552.1 | ""AD"" | $P(^PSX(552.1 | DA | 0) | U | 1) | DA)="""" K:$P(^PSX(552.1 | DA | 0) | ""^"" | 4)'="""" ^PSX(552.1 | ""AQ"" | $P(^PSX(552.1 | DA | 0) | ""^"" | 4) | $P(^PSX(552.1 | DA | 0) | U | 1) | DA)" | "K ^PSX(552.1 | ""AD"" | $P(^PSX(552.1 | DA | 0) | U | 1) | DA)" | 1 |  |  |  | 
602 | 552.1 | 1 | MUMPS |  | "I $G(X)=""3"" S ^PSX(552.1 | ""AE"" | $P(^PSX(552.1 | DA | 0) | U | 1) | DA)="""" K:$P(^PSX(552.1 | DA | 0) | U | 4)'="""" ^PSX(552.1 | ""AQ"" | $P(^PSX(552.1 | DA | 0) | U | 4) | $P(^PSX(552.1 | DA | 0) | U | 1) | DA)" | "K ^PSX(552.1 | ""AE"" | $P(^PSX(552.1 | DA | 0) | U | 1) | DA)" | 1 |  |  |  | 
603 | 552.1 | 1 | MUMPS |  | "I $G(X)=""5"" S ^PSX(552.1 | ""AH"" | $P(^PSX(552.1 | DA | 0) | ""^"" | 1) | DA)="""" K:$P(^PSX(552.1 | DA | 0) | U | 4)'="""" ^PSX(552.1 | ""AQ"" | $P(^PSX(552.1 | DA | 0) | U | 4) | $P(^PSX(552.1 | DA | 0) | U | 1) | DA)" | "K ^PSX(552.1 | ""AH"" | $P(^PSX(552.1 | DA | 0) | U | 1) | DA)" | 1 |  |  |  | 
604 | 552.1 | 6 | MUMPS |  | "S ^PSX(552.1 | ""AR"" | $P(^PSX(552.1 | DA | 0) | U | 4) | $P(^PSX(552.1 | DA | 0) | U | 1) | DA)=""""" | "K ^PSX(552.1 | ""AR"" | $P(^PSX(552.1 | DA | 0) | U | 4) | $P(^PSX(552.1 | DA | 0) | U | 1) | DA)" | 1 |  |  |  | 
605 | 552.1 | 7 | MUMPS |  | "S ^PSX(552.1 | ""AC"" | $P(^PSX(552.1 | DA | 0) | U | 5) | $P(^PSX(552.1 | DA | 0) | U | 1) | DA)="""" K ^PSX(552.1 | ""AP"" | $P(^PSX(552.1 | DA | 0) | U | 6) | $P(^PSX(552.1 | DA | 0) | U | 1) | DA)" | "K:$P(^PSX(552.1 | DA | 0) | ""^"" | 2)=4 ^PSX(552.1 | ""AP"" | $P(^PSX(552.1 | DA | 0) | ""^"" | 6) | $P(^PSX(552.1 | DA | 0) | ""^"" | 1) | DA) K ^PSX(552.1 | ""AC"" | $P(^PSX(552.1 | DA | 0) | U | 5) | $P(^PSX(552.1 | DA | 0) | U | 1) | DA)" | 1 |  |  |  | 
606 | 552.1 | 12 | MUMPS |  | "S:$G(X)=1 ^PSX(552.1 | ""ART"" | $P($G(^PSX(552.1 | DA | 2)) | ""^"" | 2) | DA)=""""" | "K ^PSX(552.1 | ""ART"" | $P($G(^PSX(552.1 | DA | 2)) | ""^"" | 2) | DA)" | 1 |  |  |  | 
607 | 552.1 | 16 | MUMPS |  | "S ^PSX(552.1 | ""AP"" | $P(^PSX(552.1 | DA | 0) | U | 6) | $P(^PSX(552.1 | DA | 0) | U | 1) | DA)="""" K ^PSX(552.1 | ""AQ"" | $P(^PSX(552.1 | DA | 0) | U | 4) | $P(^PSX(552.1 | DA | 0) | U | 1) | DA)" |  | 1 |  |  |  | 
608 | 552.1 | 19 | MUMPS |  | "S:X=1 ^PSX(552.1 | ""APRG"" | DA)=""""" | "K ^PSX(552.1 | ""APRG"" | DA)" | 1 |  |  |  | 
609 | 552.1 | 20 | MUMPS |  | "S:X>0 ^PSX(552.1 | ""APQ"" | X | $P(^PSX(552.1 | DA | 0) | ""^"") | DA)=""""" | "K ^PSX(552.1 | ""APQ"" | X | $P(^PSX(552.1 | DA | 0) | ""^"") | DA)" | 1 |  |  |  | 
610 | 552.117 | 0.01 | MUMPS |  | "S ^PSX(552.1 | ""AL"" | $P(^PSX(552.1 | DA(1) | 0) | ""^"") | DA(1))=""""" | "K ^PSX(552.1 | ""AL"" | $P(^PSX(552.1 | DA(1) | 0) | ""^"") | DA(1))" | 1 |  |  |  | 
611 | 552.2 | 1 | MUMPS |  | "S:$G(X)=1 ^PSX(552.2 | ""AQ"" | $P(^PSX(552.2 | DA | 0) | ""-"" | 1 | 2) | DA)=""""" | "K ^PSX(552.2 | ""AQ"" | $P(^PSX(552.2 | DA | 0) | ""-"" | 1 | 2) | DA)" | 1 |  |  |  | 
612 | 552.2 | 1 | MUMPS |  | "S:$G(X)=2 ^PSX(552.2 | ""AE"" | $P(^PSX(552.2 | DA | 0) | ""-"" | 1 | 2) | DA)=""""" | "K ^PSX(552.2 | ""AE"" | $P(^PSX(552.2 | DA | 0) | ""-"" | 1 | 2) | DA)" | 1 |  |  |  | 
613 | 552.2 | 1 | MUMPS |  | "S:$G(X)=4 ^PSX(552.2 | ""AB"" | $P(^PSX(552.2 | DA | 0) | ""-"" | 1 | 2) | DA)=""""" | "K ^PSX(552.2 | ""AB"" | $P(^PSX(552.2 | DA | 0) | ""-"" | 1 | 2) | DA)" | 1 |  |  |  | 
614 | 552.2 | 1 | MUMPS |  | "S:$G(X)=99 ^PSX(552.2 | ""AR"" | $P(^PSX(552.2 | DA | 0) | ""-"" | 1 | 2) | DA)=""""" | "K ^PSX(552.2 | ""AR"" | $P(^PSX(552.2 | DA | 0) | ""-"" | 1 | 2) | DA)" | 1 |  |  |  | 
615 | 552.2 | 1 | MUMPS |  | "S:$G(X)=5 ^PSX(552.2 | ""AP"" | $P(^PSX(552.2 | DA | 0) | ""-"" | 1 | 2) | DA)=""""" | "K ^PSX(552.2 | ""AP"" | $P(^PSX(552.2 | DA | 0) | ""-"" | 1 | 2) | DA)" | 1 |  |  |  | 
616 | 552.3 | 1 | MUMPS |  | "S:X=1 ^PSX(552.3 | ""AF"" | DA)=""""" | "K ^PSX(552.3 | ""AF"" | DA)" | 1 |  |  |  | 
617 | 552.3 | 1 | MUMPS |  | "S:X=2 ^PSX(552.3 | ""AQ"" | DA)=""""" | "K ^PSX(552.3 | ""AQ"" | DA)" | 1 |  |  |  | 
618 | 552.3 | 1 | MUMPS |  | "S:$G(X)=3 ^PSX(552.3 | ""AD"" | DA)=""""" | "K ^PSX(552.3 | ""AD"" | DA)" | 1 |  |  |  | 
619 | 552.3 | 1 | MUMPS |  | "S:$G(X)=4 ^PSX(552.3 | ""AR"" | DA)=""""" | "K ^PSX(552.3 | ""AR"" | DA)" | 1 |  |  |  | 
620 | 552.41 | 0.02 | MUMPS |  | "S ^PSX(552.4 | ""AD"" | $P(X | ""."") | DA(1) | DA)=""""" | "K ^PSX(552.4 | ""AD"" | $P(X | ""."") | DA(1) | DA)" | 1 |  |  |  | 
621 | 552.41 | 1 | MUMPS |  | "S:X=2 ^PSX(552.4 | ""AP"" | $P(^PSX(552.4 | DA(1) | 0) | ""^"" | 1) | $P(^PSX(552.4 | DA(1) | 1 | DA | 0) | ""^"" | 1))=""""" | "K ^PSX(552.4 | ""AP"" | $P(^PSX(552.4 | DA(1) | 0) | ""^"" | 1) | $P(^PSX(552.4 | DA(1) | 1 | DA | 0) | ""^"" | 1))" | 1 |  |  |  | 
622 | 552.41 | 9 | MUMPS |  | "S:$G(X)=1 ^PSX(552.4 | ""AC"" | +$P(^PSX(552.1 | +^PSX(552.4 | DA(1) | 0) | 0) | ""-"") | DA(1) | DA)=""""" | "K ^PSX(552.4 | ""AC"" | +$P(^PSX(552.1 | +^PSX(552.4 | DA(1) | 0) | 0) | ""-"") | DA(1) | DA)" | 1 |  |  |  | 
623 | 552.41 | 9 | MUMPS |  | "S:X=5 ^PSX(552.4 | ""AR"" | $P(^PSX(552.4 | DA(1) | 0) | ""^"" | 1) | $P(^PSX(552.4 | DA(1) | 1 | DA | 0) | ""^"" | 1))=""""" | "K ^PSX(552.4 | ""AR"" | $P(^PSX(552.4 | DA(1) | 0) | ""^"" | 1) | $P(^PSX(552.4 | DA(1) | 1 | DA | 0) | ""^"" | 1))" | 1 |  |  |  | 
624 | 552.41 | 9 | MUMPS |  | "S:$G(X)=2 ^PSX(552.4 | ""AX"" | +$P(^PSX(552.1 | +^PSX(552.4 | DA(1) | 0) | 0) | ""-"") | DA(1) | DA)=""""" | "K ^PSX(552.4 | ""AX"" | +$P(^PSX(552.1 | +^PSX(552.4 | DA(1) | 0) | 0) | ""-"") | DA(1) | DA)" | 1 |  |  |  | 
625 | 552.41 | 15 | MUMPS |  | "S:X'="""" ^PSX(552.4 | ""AB"" | X | DA(1) | DA)=""""" | "K ^PSX(552.4 | ""AB"" | X | DA(1) | DA)" | 1 |  |  |  | 
626 | 553.1 | 1 | MUMPS |  | "S ^PSX(553.1 | ""AD"" | X | $P(^PSX(553.1 | DA | 0) | ""^"") | DA)=""""" | "K ^PSX(553.1 | ""AD"" | X | $P(^PSX(553.1 | DA | 0) | ""^"") | DA)" | 1 |  |  |  | 
627 | 553.1 | 6 | MUMPS |  | "S ^PSX(553.1 | ""AC"" | X | DA)="""" K ^PSX(553.1 | ""C"" | $P(^PSX(553.1 | DA | 0) | U | 4) | DA)" | "K ^PSX(553.1 | ""AC"" | X | DA)" | 1 |  |  |  | 
628 | 554.02 | 1 | MUMPS |  | "S:'X!(X=1) ^PSX(554 | ""ARUN"" | X | DA)=""""" | "K ^PSX(554 | ""ARUN"" | X | DA)" | 1 |  |  |  | 
629 | 554.03 | 1 | MUMPS |  | "S:X'="""" ^PSX(554 | ""AC"" | X | DA)=""""" | "K ^PSX(554 | ""AC"" | X | DA)" | 1 |  |  |  | 
630 | 554.03 | 2 | MUMPS |  | "S:X'="""" ^PSX(554 | ""AF"" | X | DA)=""""" | "K ^PSX(554 | ""AF"" | X | DA)" | 1 |  |  |  | 
631 | 9000010 | 0.01 | MUMPS |  | "I $P(^AUPNVSIT(DA | 0) | U | 5) | $P(^(0) | U | 7)]"""" | $P(^(0) | U | 7)=""H"" S ^AUPNVSIT(""AAH"" | $P(^AUPNVSIT(DA | 0) | U | 5) | ((9999999-$P(X | ""."" | 1))_$S($P(X | ""."" | 2)'="""":"".""_$P(X | ""."" | 2) | 1:"""")) | DA)=""""" | "I $P(^AUPNVSIT(DA | 0) | U | 5) | $P(^(0) | U | 7)]"""" | $P(^(0) | U | 7)=""H"" K ^AUPNVSIT(""AAH"" | $P(^AUPNVSIT(DA | 0) | U | 5) | ((9999999-$P(X | ""."" | 1))_$S($P(X | ""."" | 2)'="""":"".""_$P(X | ""."" | 2) | 1:"""")) | DA)" |  |  |  |  | 
632 | 9000010 | 0.01 | MUMPS |  | "I $P(^AUPNVSIT(DA | 0) | U | 5) S ^AUPNVSIT(""AA"" | $P(^AUPNVSIT(DA | 0) | U | 5) | ((9999999-$P(X | ""."" | 1))_$S($P(X | ""."" | 2)'="""":"".""_$P(X | ""."" | 2) | 1:"""")) | DA)=$S(+$P(^AUPNVSIT(DA | 0) | U | 21):+$P(^(0) | U | 21) | 1:"""")" | "I $P(^AUPNVSIT(DA | 0) | U | 5) K ^AUPNVSIT(""AA"" | $P(^AUPNVSIT(DA | 0) | U | 5) | ((9999999-$P(X | ""."" | 1))_$S($P(X | ""."" | 2)'="""":"".""_$P(X | ""."" | 2) | 1:"""")) | DA)" |  |  |  |  | 
633 | 9000010 | 0.01 | MUMPS |  | "I $P($G(^AUPNVSIT(DA | 150)) | U | 3)]"""" | $P($G(^AUPNVSIT(DA | 0)) | U | 22)]"""" | $P($G(^AUPNVSIT(DA | 0)) | U | 5)]"""" S ^AUPNVSIT(""AET"" | $P(^AUPNVSIT(DA | 0) | U | 5) | X | $P(^AUPNVSIT(DA | 0) | U | 22) | $P(^AUPNVSIT(DA | 150) | U | 3) | DA)=""""" | "I $P($G(^AUPNVSIT(DA | 150)) | U | 3)]"""" | $P($G(^AUPNVSIT(DA | 0)) | U | 22)]"""" | $P($G(^AUPNVSIT(DA | 0)) | U | 5)]"""" K ^AUPNVSIT(""AET"" | $P(^AUPNVSIT(DA | 0) | U | 5) | X | $P(^AUPNVSIT(DA | 0) | U | 22) | $P(^AUPNVSIT(DA | 150) | U | 3) | DA)" |  |  |  |  | 
634 | 9000010 | 0.01 | MUMPS |  | "I $G(DUZ(""AG""))'?1""I""0.1""HS"" | +$P(^AUPNVSIT(DA | 0) | ""^"" | 9)'>0 S ^AUPNVSIT(""ADEL"" | +X | DA)=""""" | "K ^AUPNVSIT(""ADEL"" | +X | DA)" |  |  |  |  | 
635 | 9000010 | 0.01 | MUMPS |  | "I $P(^AUPNVSIT(DA | 0) | U | 22) S ^AUPNVSIT(""AHL"" | $P(^AUPNVSIT(DA | 0) | U | 22) | ((9999999-$P(X | ""."" | 1))_$S($P(X | ""."" | 2)'="""":"".""_$P(X | ""."" | 2) | 1:"""")) | DA)=""""" | "I $P(^AUPNVSIT(DA | 0) | U | 22) K ^AUPNVSIT(""AHL"" | $P(^AUPNVSIT(DA | 0) | U | 22) | ((9999999-$P(X | ""."" | 1))_$S($P(X | ""."" | 2)'="""":"".""_$P(X | ""."" | 2) | 1:"""")) | DA)" |  |  |  |  | 
636 | 9000010 | 0.05 | MUMPS |  | "S ^AUPNVSIT(""AA"" | X | ((9999999-$P(+^AUPNVSIT(DA | 0) | ""."" | 1))_$S($P(+^AUPNVSIT(DA | 0) | ""."" | 2)'="""":"".""_$P(+^(0) | ""."" | 2) | 1:"""")) | DA)=$S(+$P(^AUPNVSIT(DA | 0) | U | 21):+$P(^(0) | U | 21) | 1:"""")" | "K ^AUPNVSIT(""AA"" | X | ((9999999-$P(+^AUPNVSIT(DA | 0) | ""."" | 1))_$S($P(+^AUPNVSIT(DA | 0) | ""."" | 2)'="""":"".""_$P(+^(0) | ""."" | 2) | 1:"""")) | DA)" |  |  |  |  | 
637 | 9000010 | 0.05 | MUMPS |  | "I $P(^AUPNVSIT(DA | 0) | U | 7)]"""" | $P(^(0) | U | 7)=""H"" S ^AUPNVSIT(""AAH"" | X | ((9999999-$P(+^AUPNVSIT(DA | 0) | ""."" | 1))_$S($P(+^AUPNVSIT(DA | 0) | ""."" | 2)'="""":"".""_$P(+^(0) | ""."" | 2) | 1:"""")) | DA)=""""" | "I $P(^AUPNVSIT(DA | 0) | U | 7)]"""" | $P(^(0) | U | 7)=""H"" K ^AUPNVSIT(""AAH"" | X | ((9999999-$P(+^AUPNVSIT(DA | 0) | ""."" | 1))_$S($P(+^AUPNVSIT(DA | 0) | ""."" | 2)'="""":"".""_$P(+^(0) | ""."" | 2) | 1:"""")) | DA)" |  |  |  |  | 
638 | 9000010 | 0.05 | MUMPS |  | "I $P($G(^AUPNVSIT(DA | 150)) | U | 3)]"""" | $P($G(^AUPNVSIT(DA | 0)) | U | 22)]"""" S ^AUPNVSIT(""AET"" | X | $P(^AUPNVSIT(DA | 0) | U | 1) | $P(^AUPNVSIT(DA | 0) | U | 22) | $P(^AUPNVSIT(DA | 150) | U | 3) | DA)=""""" | "I $P($G(^AUPNVSIT(DA | 150)) | U | 3)]"""" | $P($G(^AUPNVSIT(DA | 0)) | U | 22)]"""" K ^AUPNVSIT(""AET"" | X | $P(^AUPNVSIT(DA | 0) | U | 1) | $P(^AUPNVSIT(DA | 0) | U | 22) | $P(^AUPNVSIT(DA | 150) | U | 3) | DA)" |  |  |  |  | 
639 | 9000010 | 0.07 | MUMPS |  | "I X=""H"" | $P(^AUPNVSIT(DA | 0) | U | 5)]"""" S ^AUPNVSIT(""AAH"" | $P(^AUPNVSIT(DA | 0) | U | 5) | ((9999999-$P(+^(0) | ""."" | 1))_$S($P(+^(0) | ""."" | 2):"".""_$P(+^(0) | ""."" | 2) | 1:"""")) | DA)=""""" | "I X=""H"" | $P(^AUPNVSIT(DA | 0) | U | 5)]"""" K ^AUPNVSIT(""AAH"" | $P(^AUPNVSIT(DA | 0) | U | 5) | ((9999999-$P(+^(0) | ""."" | 1))_$S($P(+^(0) | ""."" | 2):"".""_$P(+^(0) | ""."" | 2) | 1:"""")) | DA)" |  |  |  |  | 
640 | 9000010 | 0.12 | MUMPS |  | D ADD^AUPNVSIT | D SUB^AUPNVSIT |  |  |  |  | 
641 | 9000010 | 0.21 | MUMPS |  | "I +$P(^AUPNVSIT(DA | 0) | ""^"" | 5) S ^AUPNVSIT(""AA"" | $P(^AUPNVSIT(DA | 0) | ""^"" | 5) | ((9999999-$P(+^AUPNVSIT(DA | 0) | "".""))_$S($P(+^AUPNVSIT(DA | 0) | ""."" | 2)'="""":"".""_$P(+^(0) | ""."" | 2) | 1:"""")) | DA)=$S(+X:+X | 1:"""")" |  |  |  |  |  | 
642 | 9000010 | 0.22 | MUMPS |  | "S ^AUPNVSIT(""AHL"" | X | (9999999-$P($P(^AUPNVSIT(DA | 0) | U | 1) | ""."" | 1))_$S($P($P(^(0) | U | 1) | ""."" | 2)'="""":"".""_$P($P(^(0) | U | 1) | ""."" | 2) | 1:"""") | DA)=""""" | "K ^AUPNVSIT(""AHL"" | X | (9999999-$P($P(^AUPNVSIT(DA | 0) | U | 1) | ""."" | 1))_$S($P($P(^(0) | U | 1) | ""."" | 2)'="""":"".""_$P($P(^(0) | U | 1) | ""."" | 2) | 1:"""") | DA)" |  |  |  |  | 
643 | 9000010 | 0.22 | MUMPS |  | "I $P($G(^AUPNVSIT(DA | 150)) | U | 3)]"""" | $P($G(^AUPNVSIT(DA | 0)) | U | 5)]"""" S ^AUPNVSIT(""AET"" | $P(^AUPNVSIT(DA | 0) | U | 5) | $P(^AUPNVSIT(DA | 0) | U | 1) | X | $P(^AUPNVSIT(DA | 150) | U | 3) | DA)=""""" | "I $P($G(^AUPNVSIT(DA | 150)) | U | 3)]"""" | $P($G(^AUPNVSIT(DA | 0)) | U | 5)]"""" K ^AUPNVSIT(""AET"" | $P(^AUPNVSIT(DA | 0) | U | 5) | $P(^AUPNVSIT(DA | 0) | U | 1) | X | $P(^AUPNVSIT(DA | 150) | U | 3) | DA)" |  |  |  |  | 
644 | 9000010 | 15003 | MUMPS |  | "I $P($G(^AUPNVSIT(DA | 0)) | U | 5)]"""" | $P($G(^AUPNVSIT(DA | 0)) | U | 22)]"""" S ^AUPNVSIT(""AET"" | $P(^AUPNVSIT(DA | 0) | U | 5) | $P(^AUPNVSIT(DA | 0) | U | 1) | $P(^AUPNVSIT(DA | 0) | U | 22) | X | DA)=""""" | "I $P($G(^AUPNVSIT(DA | 0)) | U | 5)]"""" | $P($G(^AUPNVSIT(DA | 0)) | U | 22)]"""" K ^AUPNVSIT(""AET"" | $P(^AUPNVSIT(DA | 0) | U | 5) | $P(^AUPNVSIT(DA | 0) | U | 1) | $P(^AUPNVSIT(DA | 0) | U | 22) | X | DA)" |  |  |  |  | 
645 | 9000010.06 | 0.03 | MUMPS |  | D ADD^AUPNVSIT | D SUB^AUPNVSIT |  |  |  |  | 
646 | 9000010.07 | 0.02 | MUMPS |  | "I $P(^AUPNVPOV(DA | 0) | U | 3)]"""" S ^AUPNVPOV(""AA"" | X | (9999999-$P(+^AUPNVSIT($P(^AUPNVPOV(DA | 0) | U | 3) | 0) | ""."" | 1)) | DA)=""""" | "I $P(^AUPNVPOV(DA | 0) | U | 3)]"""" K ^AUPNVPOV(""AA"" | X | (9999999-$P(+^AUPNVSIT($P(^AUPNVPOV(DA | 0) | U | 3) | 0) | ""."" | 1)) | DA)" |  |  |  |  | 
647 | 9000010.07 | 0.03 | MUMPS |  | "Q:$P(^AUPNVPOV(DA | 0) | U | 2)=""""  S ^AUPNVPOV(""AA"" | $P(^AUPNVPOV(DA | 0) | U | 2) | (9999999-$P(+^AUPNVSIT(X | 0) | ""."" | 1)) | DA)=""""" | "Q:$P(^AUPNVPOV(DA | 0) | U | 2)=""""  K ^AUPNVPOV(""AA"" | $P(^AUPNVPOV(DA | 0) | U | 2) | (9999999-$P(+^AUPNVSIT(X | 0) | ""."" | 1)) | DA)" |  |  |  |  | 
648 | 9000010.07 | 0.03 | MUMPS |  | D ADD^AUPNVSIT | D SUB^AUPNVSIT |  |  |  |  | 
649 | 9000010.11 | 0.01 | MUMPS |  | "I $P(^AUPNVIMM(DA | 0) | U | 2)]"""" | $P(^(0) | U | 3)]"""" S ^AUPNVIMM(""AA"" | $P(^AUPNVIMM(DA | 0) | U | 2) | X | (9999999-$P(+^AUPNVSIT($P(^AUPNVIMM(DA | 0) | U | 3) | 0) | ""."" | 1)) | DA)=""""" | "I $P(^AUPNVIMM(DA | 0) | U | 2)]"""" | $P(^(0) | U | 3)]"""" K ^AUPNVIMM(""AA"" | $P(^AUPNVIMM(DA | 0) | U | 2) | X | (9999999-$P(+^AUPNVSIT($P(^AUPNVIMM(DA | 0) | U | 3) | 0) | ""."" | 1)) | DA)" |  |  |  |  | 
650 | 9000010.11 | 0.02 | MUMPS |  | "I $P(^AUPNVIMM(DA | 0) | U | 3)]"""" S ^AUPNVIMM(""AA"" | X | +^AUPNVIMM(DA | 0) | (9999999-$P(+^AUPNVSIT($P(^AUPNVIMM(DA | 0) | U | 3) | 0) | ""."" | 1)) | DA)=""""" | "I $P(^AUPNVIMM(DA | 0) | U | 3)]"""" K ^AUPNVIMM(""AA"" | X | +^AUPNVIMM(DA | 0) | (9999999-$P(+^AUPNVSIT($P(^AUPNVIMM(DA | 0) | U | 3) | 0) | ""."" | 1)) | DA)" |  |  |  |  | 
651 | 9000010.11 | 0.03 | MUMPS |  | "Q:$P(^AUPNVIMM(DA | 0) | U | 2)=""""  S ^AUPNVIMM(""AA"" | $P(^AUPNVIMM(DA | 0) | U | 2) | +^AUPNVIMM(DA | 0) | (9999999-$P(+^AUPNVSIT(X | 0) | ""."" | 1)) | DA)=""""" | "Q:$P(^AUPNVIMM(DA | 0) | U | 2)=""""  K ^AUPNVIMM(""AA"" | $P(^AUPNVIMM(DA | 0) | U | 2) | +^AUPNVIMM(DA | 0) | (9999999-$P(+^AUPNVSIT(X | 0) | ""."" | 1)) | DA)" |  |  |  |  | 
652 | 9000010.11 | 0.03 | MUMPS |  | D ADD^AUPNVSIT | D SUB^AUPNVSIT |  |  |  |  | 
653 | 9000010.12 | 0.01 | MUMPS |  | "I $P(^AUPNVSK(DA | 0) | U | 2)]"""" | $P(^(0) | U | 3)]"""" S ^AUPNVSK(""AA"" | $P(^AUPNVSK(DA | 0) | U | 2) | X | (9999999-$P(+^AUPNVSIT($P(^AUPNVSK(DA | 0) | U | 3) | 0) | ""."" | 1)) | DA)=""""" | "I $P(^AUPNVSK(DA | 0) | U | 2)]"""" | $P(^(0) | U | 3)]"""" K ^AUPNVSK(""AA"" | $P(^AUPNVSK(DA | 0) | U | 2) | X | (9999999-$P(+^AUPNVSIT($P(^AUPNVSK(DA | 0) | U | 3) | 0) | ""."" | 1)) | DA)" |  |  |  |  | 
654 | 9000010.12 | 0.02 | MUMPS |  | "I $P(^AUPNVSK(DA | 0) | U | 3)]"""" S ^AUPNVSK(""AA"" | X | +^AUPNVSK(DA | 0) | (9999999-$P(+^AUPNVSIT($P(^AUPNVSK(DA | 0) | U | 3) | 0) | ""."" | 1)) | DA)=""""" | "I $P(^AUPNVSK(DA | 0) | U | 3)]"""" K ^AUPNVSK(""AA"" | X | +^AUPNVSK(DA | 0) | (9999999-$P(+^AUPNVSIT($P(^AUPNVSK(DA | 0) | U | 3) | 0) | ""."" | 1)) | DA)" |  |  |  |  | 
655 | 9000010.12 | 0.03 | MUMPS |  | "Q:$P(^AUPNVSK(DA | 0) | U | 2)=""""  S ^AUPNVSK(""AA"" | $P(^AUPNVSK(DA | 0) | U | 2) | +^AUPNVSK(DA | 0) | (9999999-$P(+^AUPNVSIT(X | 0) | ""."" | 1)) | DA)=""""" | "Q:$P(^AUPNVSK(DA | 0) | U | 2)=""""  K ^AUPNVSK(""AA"" | $P(^AUPNVSK(DA | 0) | U | 2) | +^AUPNVSK(DA | 0) | (9999999-$P(+^AUPNVSIT(X | 0) | ""."" | 1)) | DA)" |  |  |  |  | 
656 | 9000010.12 | 0.03 | MUMPS |  | D ADD^AUPNVSIT | D SUB^AUPNVSIT |  |  |  |  | 
657 | 9000010.13 | 0.01 | MUMPS |  | "I $P(^AUPNVXAM(DA | 0) | U | 2)]"""" | $P(^(0) | U | 3)]"""" S ^AUPNVXAM(""AA"" | $P(^AUPNVXAM(DA | 0) | U | 2) | X | (9999999-$P(+^AUPNVSIT($P(^AUPNVXAM(DA | 0) | U | 3) | 0) | ""."" | 1)) | DA)=""""" | "I $P(^AUPNVXAM(DA | 0) | U | 2)]"""" | $P(^(0) | U | 3)]"""" K ^AUPNVXAM(""AA"" | $P(^AUPNVXAM(DA | 0) | U | 2) | X | (9999999-$P(+^AUPNVSIT($P(^AUPNVXAM(DA | 0) | U | 3) | 0) | ""."" | 1)) | DA)" |  |  |  |  | 
658 | 9000010.13 | 0.02 | MUMPS |  | "I $P(^AUPNVXAM(DA | 0) | U | 3)]"""" S ^AUPNVXAM(""AA"" | X | +^AUPNVXAM(DA | 0) | (9999999-$P(+^AUPNVSIT($P(^AUPNVXAM(DA | 0) | U | 3) | 0) | ""."" | 1)) | DA)=""""" | "I $P(^AUPNVXAM(DA | 0) | U | 3)]"""" K ^AUPNVXAM(""AA"" | X | +^AUPNVXAM(DA | 0) | (9999999-$P(+^AUPNVSIT($P(^AUPNVXAM(DA | 0) | U | 3) | 0) | ""."" | 1)) | DA)" |  |  |  |  | 
659 | 9000010.13 | 0.03 | MUMPS |  | "Q:$P(^AUPNVXAM(DA | 0) | U | 2)=""""  S ^AUPNVXAM(""AA"" | $P(^AUPNVXAM(DA | 0) | U | 2) | +^AUPNVXAM(DA | 0) | (9999999-$P(+^AUPNVSIT(X | 0) | ""."" | 1)) | DA)=""""" | "Q:$P(^AUPNVXAM(DA | 0) | U | 2)=""""  K ^AUPNVXAM(""AA"" | $P(^AUPNVXAM(DA | 0) | U | 2) | +^AUPNVXAM(DA | 0) | (9999999-$P(+^AUPNVSIT(X | 0) | ""."" | 1)) | DA)" |  |  |  |  | 
660 | 9000010.13 | 0.03 | MUMPS |  | D ADD^AUPNVSIT | D SUB^AUPNVSIT |  |  |  |  | 
661 | 9000010.15 | 0.02 | MUMPS |  | "I $P(^AUPNVTRT(DA | 0) | U | 3)]"""" S ^AUPNVTRT(""AA"" | X | (9999999-$P(+^AUPNVSIT($P(^AUPNVTRT(DA | 0) | U | 3) | 0) | ""."" | 1)) | DA)=""""" | "I $P(^AUPNVTRT(DA | 0) | U | 3)]"""" K ^AUPNVTRT(""AA"" | X | (9999999-$P(+^AUPNVSIT($P(^AUPNVTRT(DA | 0) | U | 3) | 0) | ""."" | 1)) | DA)" |  |  |  |  | 
662 | 9000010.15 | 0.03 | MUMPS |  | "Q:$P(^AUPNVTRT(DA | 0) | U | 2)=""""  S ^AUPNVTRT(""AA"" | $P(^AUPNVTRT(DA | 0) | U | 2) | (9999999-$P(+^AUPNVSIT(X | 0) | ""."" | 1)) | DA)=""""" | "Q:$P(^AUPNVTRT(DA | 0) | U | 2)=""""  K ^AUPNVTRT(""AA"" | $P(^AUPNVTRT(DA | 0) | U | 2) | (9999999-$P(+^AUPNVSIT(X | 0) | ""."" | 1)) | DA)" |  |  |  |  | 
663 | 9000010.15 | 0.03 | MUMPS |  | D ADD^AUPNVSIT | D SUB^AUPNVSIT |  |  |  |  | 
664 | 9000010.16 | 0.01 | MUMPS |  | "I $P(^AUPNVPED(DA | 0) | U | 2)]"""" | $P(^(0) | U | 3)]"""" S ^AUPNVPED(""AA"" | $P(^AUPNVPED(DA | 0) | U | 2) | X | (9999999-$P(+^AUPNVSIT($P(^AUPNVPED(DA | 0) | U | 3) | 0) | ""."" | 1)) | DA)=""""" | "I $P(^AUPNVPED(DA | 0) | U | 2)]"""" | $P(^(0) | U | 3)]"""" K ^AUPNVPED(""AA"" | $P(^AUPNVPED(DA | 0) | U | 2) | X | (9999999-$P(+^AUPNVSIT($P(^AUPNVPED(DA | 0) | U | 3) | 0) | ""."" | 1)) | DA)" |  |  |  |  | 
665 | 9000010.16 | 0.02 | MUMPS |  | "I $P(^AUPNVPED(DA | 0) | U | 3)]"""" S ^AUPNVPED(""AA"" | X | +^AUPNVPED(DA | 0) | (9999999-$P(+^AUPNVSIT($P(^AUPNVPED(DA | 0) | U | 3) | 0) | ""."" | 1)) | DA)=""""" | "I $P(^AUPNVPED(DA | 0) | U | 3)]"""" K ^AUPNVPED(""AA"" | X | +^AUPNVPED(DA | 0) | (9999999-$P(+^AUPNVSIT($P(^AUPNVPED(DA | 0) | U | 3) | 0) | ""."" | 1)) | DA)" |  |  |  |  | 
666 | 9000010.16 | 0.03 | MUMPS |  | "Q:$P(^AUPNVPED(DA | 0) | U | 2)=""""  S ^AUPNVPED(""AA"" | $P(^AUPNVPED(DA | 0) | U | 2) | +$P(^(0) | U | 1) | (9999999-$P(+^AUPNVSIT(X | 0) | ""."" | 1)) | DA)=""""" | "Q:$P(^AUPNVPED(DA | 0) | U | 2)=""""  K ^AUPNVPED(""AA"" | $P(^AUPNVPED(DA | 0) | U | 2) | $P(^(0) | U | 1) | (9999999-$P(+^AUPNVSIT(X | 0) | ""."" | 1)) | DA)" |  |  |  |  | 
667 | 9000010.16 | 0.03 | MUMPS |  | D ADD^AUPNVSIT | D SUB^AUPNVSIT |  |  |  |  | 
668 | 9000010.18 | 0.01 | MUMPS |  | "I $P(^AUPNVCPT(DA | 0) | U | 2)]"""" | $P(^(0) | U | 3)]"""" S ^AUPNVCPT(""AA"" | $P(^AUPNVCPT(DA | 0) | U | 2) | X | (9999999-$P(+^AUPNVSIT($P(^AUPNVCPT(DA | 0) | U | 3) | 0) | ""."" | 1)) | DA)=""""" | "I $P(^AUPNVCPT(DA | 0) | U | 2)]"""" | $P(^(0) | U | 3)]"""" K ^AUPNVCPT(""AA"" | $P(^AUPNVCPT(DA | 0) | U | 2) | X | (9999999-$P(+^AUPNVSIT($P(^AUPNVCPT(DA | 0) | U | 3) | 0) | ""."" | 1)) | DA)" |  |  |  |  | 
669 | 9000010.18 | 0.02 | MUMPS |  | "I $P(^AUPNVCPT(DA | 0) | U | 3)]"""" S ^AUPNVCPT(""AA"" | X | +^AUPNVCPT(DA | 0) | (9999999-$P(+^AUPNVSIT($P(^AUPNVCPT(DA | 0) | U | 3) | 0) | ""."" | 1)) | DA)=""""" | "I $P(^AUPNVCPT(DA | 0) | U | 3)]"""" K ^AUPNVCPT(""AA"" | X | +^AUPNVCPT(DA | 0) | (9999999-$P(+^AUPNVSIT($P(^AUPNVCPT(DA | 0) | U | 3) | 0) | ""."" | 1)) | DA)" |  |  |  |  | 
670 | 9000010.18 | 0.03 | MUMPS |  | "Q:$P(^AUPNVCPT(DA | 0) | U | 2)=""""  S ^AUPNVCPT(""AA"" | $P(^AUPNVCPT(DA | 0) | U | 2) | +^AUPNVCPT(DA | 0) | (9999999-$P(+^AUPNVSIT(X | 0) | ""."" | 1)) | DA)=""""" | "Q:$P(^AUPNVCPT(DA | 0) | U | 2)=""""  K ^AUPNVCPT(""AA"" | $P(^AUPNVCPT(DA | 0) | U | 2) | +^AUPNVCPT(DA | 0) | (9999999-$P(+^AUPNVSIT(X | 0) | ""."" | 1)) | DA)" |  |  |  |  | 
671 | 9000010.18 | 0.03 | MUMPS |  | D ADD^AUPNVSIT | D SUB^AUPNVSIT |  |  |  |  | 
672 | 9000010.23 | 0.01 | MUMPS |  | "I $P(^AUPNVHF(DA | 0) | U | 2)]"""" | $P(^(0) | U | 3)]"""" S ^AUPNVHF(""AA"" | $P(^AUPNVHF(DA | 0) | U | 2) | X | (9999999-$P(^AUPNVSIT($P(^AUPNVHF(DA | 0) | U | 3) | 0) | ""."")) | DA)=""""" | "I $P(^AUPNVHF(DA | 0) | U | 2)]"""" | $P(^(0) | U | 3)]"""" K ^AUPNVHF(""AA"" | $P(^AUPNVHF(DA | 0) | U | 2) | X | (9999999-$P(^AUPNVSIT($P(^AUPNVHF(DA | 0) | U | 3) | 0) | ""."")) | DA)" |  |  |  |  | 
673 | 9000010.23 | 0.02 | MUMPS |  | "I $P(^AUPNVHF(DA | 0) | U | 3)]"""" S ^AUPNVHF(""AA"" | X | $P(^AUPNVHF(DA | 0) | U | 1) | (9999999-$P(+^AUPNVSIT($P(^AUPNVHF(DA | 0) | U | 3) | 0) | ""."" | 1)) | DA)=""""" | "I $P(^AUPNVHF(DA | 0) | U | 3)]"""" K ^AUPNVHF(""AA"" | X | $P(^AUPNVHF(DA | 0) | U | 1) | (9999999-$P(+^AUPNVSIT($P(^AUPNVHF(DA | 0) | U | 3) | 0) | ""."" | 1)) | DA)" |  |  |  |  | 
674 | 9000010.23 | 0.03 | MUMPS |  | "Q:$P(^AUPNVHF(DA | 0) | U | 2)=""""  S ^AUPNVHF(""AA"" | $P(^AUPNVHF(DA | 0) | U | 2) | $P(^(0) | U | 1) | (9999999-$P(+^AUPNVSIT(X | 0) | ""."" | 1)) | DA)=""""" | "Q:$P(^AUPNVHF(DA | 0) | U | 2)=""""  K ^AUPNVHF(""AA"" | $P(^AUPNVHF(DA | 0) | U | 2) | $P(^(0) | U | 1) | (9999999-$P(+^AUPNVSIT(X | 0) | ""."" | 1)) | DA)" |  |  |  |  | 
675 | 9000010.23 | 0.03 | MUMPS |  | D ADD^AUPNVSIT | D SUB^AUPNVSIT |  |  |  |  | 
676 | 9000011 | 0.02 | MUMPS |  | "I $P(^AUPNPROB(DA | 0) | U | 6)]"""" | $P(^(0) | U | 7)]"""" S X1=$P($P(^(0) | U | 7) | ""."") | X2=$P($P(^(0) | U | 7) | ""."" | 2) | ^AUPNPROB(""AA"" | X | $P(^(0) | U | 6) | "" ""_$E(""000"" | 1 | 4-$L(X1)-1)_X1_"".""_X2_$E(""00"" | 1 | 3-$L(X2)-1) | DA)="""" K X1 | X2" | "I $P(^AUPNPROB(DA | 0) | U | 6)]"""" | $P(^(0) | U | 7)]"""" S X1=$P($P(^(0) | U | 7) | ""."") | X2=$P($P(^(0) | U | 7) | ""."" | 2) K ^AUPNPROB(""AA"" | X | $P(^(0) | U | 6) | "" ""_$E(""000"" | 1 | 4-$L(X1)-1)_X1_"".""_X2_$E(""00"" | 1 | 3-$L(X2)-1) | DA) | X1 | X2" |  |  |  |  | 
677 | 9000011 | 0.03 | MUMPS |  | "K ^AUPNPROB(""MODIFIED"" | $P(^AUPNPROB(DA | 0) | ""^"" | 2)) D NOW^%DTC S ^AUPNPROB(""MODIFIED"" | $P(^AUPNPROB(DA | 0) | ""^"" | 2) | %)=""""" | Q |  |  |  |  | 
678 | 9000011 | 0.06 | MUMPS |  | "I $P(^AUPNPROB(DA | 0) | U | 2)]"""" | $P(^(0) | U | 7)]"""" S X1=$P($P(^(0) | U | 7) | ""."") | X2=$P($P(^(0) | U | 7) | ""."" | 2) | ^AUPNPROB(""AA"" | $P(^(0) | U | 2) | X | "" ""_$E(""000"" | 1 | 4-$L(X1)-1)_X1_"".""_X2_$E(""00"" | 1 | 3-$L(X2)-1) | DA)="""" K X1 | X2" | "I $P(^AUPNPROB(DA | 0) | U | 2)]"""" | $P(^(0) | U | 7)]"""" S X1=$P($P(^(0) | U | 7) | ""."") | X2=$P($P(^(0) | U | 7) | ""."" | 2) K ^AUPNPROB(""AA"" | $P(^(0) | U | 2) | X | "" ""_$E(""000"" | 1 | 4-$L(X1)-1)_X1_"".""_X2_$E(""00"" | 1 | 3-$L(X2)-1) | DA) | X1 | X2" |  |  |  |  | 
679 | 9000011 | 0.07 | MUMPS |  | "S ^AUPNPROB(""AA"" | $P(^AUPNPROB(DA | 0) | U | 2) | $P(^(0) | U | 6) | "" ""_$E(""000"" | 1 | 4-$L($P(X | ""."" | 1))-1)_$P(X | ""."" | 1)_"".""_$P(X | ""."" | 2)_$E(""00"" | 1 | 3-$L($P(X | ""."" | 2))-1) | DA)=""""" | "K ^AUPNPROB(""AA"" | $P(^AUPNPROB(DA | 0) | U | 2) | $P(^(0) | U | 6) | "" ""_$E(""000"" | 1 | 4-$L($P(X | ""."" | 1))-1)_$P(X | ""."" | 1)_"".""_$P(X | ""."" | 2)_$E(""00"" | 1 | 3-$L($P(X | ""."" | 2))-1) | DA)" |  |  |  |  | 
680 | 9000011 | 0.12 | MUMPS |  | "S:$P(^AUPNPROB(DA | 0) | U | 2) ^AUPNPROB(""ACTIVE"" | +$P(^(0) | U | 2) | X | DA)=""""" | "K ^AUPNPROB(""ACTIVE"" | +$P(^AUPNPROB(DA | 0) | U | 2) | X | DA)" |  |  |  |  | 
681 | 9999999.14 | 1.01 | MUMPS |  | "S ^AUTTIMM(""D"" | $E(X | 1 | 30) | DA)=""""" | "K ^AUTTIMM(""D"" | $E(X | 1 | 30) | DA)" |  |  |  |  | 
682 | 9999999.14 | 1.01 | MUMPS |  | "D UPXREF^BIUTL5(X | ""^AUTTIMM("" | ""V"")" | "D KUPXREF^BIUTL5(X | ""^AUTTIMM("" | ""V"")" |  |  |  |  | 
683 | 9999999.14 | 1.03 | MUMPS |  | "S ^AUTTIMM(""D"" | $E(X | 1 | 30) | DA)=""""" | "K ^AUTTIMM(""D"" | $E(X | 1 | 30) | DA)" |  |  |  |  | 
684 | 9999999.14 | 1.03 | MUMPS |  | "D UPXREF^BIUTL5(X | ""^AUTTIMM("" | ""V"")" | "D KUPXREF^BIUTL5(X | ""^AUTTIMM("" | ""V"")" |  |  |  |  | 
685 | 9999999.14 | 1.05 | MUMPS |  | "S ^AUTTIMM(""D"" | $E(X | 1 | 30) | DA)=""""" | "K ^AUTTIMM(""D"" | $E(X | 1 | 30) | DA)" |  |  |  |  | 
686 | 9999999.14 | 1.05 | MUMPS |  | "D UPXREF^BIUTL5(X | ""^AUTTIMM("" | ""V"")" | "D KUPXREF^BIUTL5(X | ""^AUTTIMM("" | ""V"")" |  |  |  |  | 
687 | 9999999.14 | 1.07 | MUMPS |  | "S ^AUTTIMM(""D"" | $E(X | 1 | 30) | DA)=""""" | "K ^AUTTIMM(""D"" | $E(X | 1 | 30) | DA)" |  |  |  |  | 
688 | 9999999.14 | 1.07 | MUMPS |  | "D UPXREF^BIUTL5(X | ""^AUTTIMM("" | ""V"")" | "D KUPXREF^BIUTL5(X | ""^AUTTIMM("" | ""V"")" |  |  |  |  | 
689 | 9999999.14 | 1.09 | MUMPS |  | "S ^AUTTIMM(""D"" | $E(X | 1 | 30) | DA)=""""" | "K ^AUTTIMM(""D"" | $E(X | 1 | 30) | DA)" |  |  |  |  | 
690 | 9999999.14 | 1.09 | MUMPS |  | "D UPXREF^BIUTL5(X | ""^AUTTIMM("" | ""V"")" | "D KUPXREF^BIUTL5(X | ""^AUTTIMM("" | ""V"")" |  |  |  |  | 
