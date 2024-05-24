#include <LiquidCrystal.h>
const int rs = 12, en = 11, d4 = 5, d5 = 4, d6 = 3, d7 = 2, ct = 9;
LiquidCrystal mylcd(rs, en, d4, d5, d6, d7);
unsigned long previousMillis = 0; 
const long interval = 20000;       

void setup() {
  pinMode(ct, OUTPUT);
  analogWrite(ct, 0);
  mylcd.begin(16, 2);
  displayData();
}

void loop() {
  unsigned long currentMillis = millis();  
  if (currentMillis - previousMillis >= interval) {
    previousMillis = currentMillis;
    displayData();
  }
}

void displayData() {
  mylcd.clear();
  mylcd.setCursor(0, 0);
  mylcd.print("Welcome To ");
  mylcd.setCursor(0, 1);
  mylcd.print("Pune City");
  delay(1000);

  for (int i = 0; i < 3; i++) {
    mylcd.clear();
    mylcd.setCursor(0, 0);
    mylcd.print("Welcome To ");
    mylcd.setCursor(0, 1);
    mylcd.print("Pune City");
    for (int j = 0; j <= i; j++) {
      mylcd.print(".");
    }
    delay(1000);
  }

  mylcd.clear();
  mylcd.setCursor(0, 0);
  mylcd.print("NO OF ISSUES: 8");
  delay(2000);
  mylcd.setCursor(0, 1);
  mylcd.print("SOLVED ISSUES: 2");
}
