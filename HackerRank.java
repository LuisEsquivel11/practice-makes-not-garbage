import java.util.ArrayList;

public class HackerRank {

    public static void main(String[] args) {
        staircase(10);
        System.out.println(kangaroo(0, 3, 4, 2));
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

    }




