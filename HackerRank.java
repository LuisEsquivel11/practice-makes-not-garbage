import java.util.ArrayList;
import java.util.Collections;

public class HackerRank {

    public static void main(String[] args) {
        ArrayList a = new ArrayList();
        Collections.addAll(a, 2, 6);
        ArrayList b = new ArrayList();
        Collections.addAll(b,  24, 36);
        loopsII(5, 3, 5);
    }

    public static void staircase(int n) {
        String stairs = "";
        for (int i = 0; i < n; i++) {
            stairs += "#";
            System.out.printf("%" + n + "s\n", stairs);
        }

    }

    // Number Line Jumps
    public static String kangaroo(int x1, int v1, int x2, int v2) {
        int kangaroo1 = x2 - x1;
        int kangaroo2 = v1 - v2;

        if (v1 > v2 && (kangaroo1) % (kangaroo2) == 0) {
            return "YES";
        } else {
            return "NO";
        }
    }



    // Between two sets

//    public static int getTotalX(ArrayList<Integer> a, ArrayList<Integer> b) {
//        int inbetween = 0;
//        for (int aNum : a) {
//            int check = a.get(0) ;
//            for (int i = 0; i < b.size(); i++)
//                if (b.get(i) % check == 0 )
//                    inbetween++;
//            System.out.println(inbetween);
//
//
//        }
//        return inbetween;
//    }
//    public static int getTotalX(ArrayList<Integer> a, ArrayList<Integer> b) {
//        int inbetween = 0;
//        for (int aNum : a) {
//            int check = a.get(0) ;
//            for (int i = 0; i < b.size(); i++)
//                if (b.get(i) % check == 0 )
//                    inbetween++;
//            System.out.println(inbetween);
//
//
//        }
//        return inbetween;
//    }

    public static void loop(int n) {
        for (int i = 1; i <= 10; i++) {
            System.out.println(n + " x " + i + " = " + (n*i));
        }
    }

    public static void loopsII(int a, int b, int n) {
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            sum += a + (b*1);
            System.out.println(sum);
        }
    }






}





