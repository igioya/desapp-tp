package utils;

import org.apache.log4j.Logger;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.Arrays;

@Aspect
@Component
public class ServiceAuditorAspect {

    private static Logger logger = Logger.getLogger(ServiceAuditorAspect.class);

    //@Before("execution(* *User(..) && within(service..*))")
    @Before( "execution(* *User(..))")
    public void logBeforeUser(JoinPoint joinPoint){

        logger.info("<timestamp="+ LocalDateTime.now()+
                ", user=?????" +
                ", operacion/metodo=" + joinPoint.getSignature().getName()+
                ", parametros=" + Arrays.toString(joinPoint.getArgs()) + ">"
        );
    }
    
    @Before( "execution(* *Vehicle(..))")
    public void logBeforeVehicle(JoinPoint joinPoint){

        logger.info("<timestamp="+ LocalDateTime.now()+
                ", user=?????" +
                ", operacion/metodo=" + joinPoint.getSignature().getName()+
                ", parametros=" + Arrays.toString(joinPoint.getArgs()) + ">"
        );
    }
    
    @Before( "execution(* *Publication(..))")
    public void logBeforePublication(JoinPoint joinPoint){

        logger.info("<timestamp="+ LocalDateTime.now()+
                ", user=?????" +
                ", operacion/metodo=" + joinPoint.getSignature().getName()+
                ", parametros=" + Arrays.toString(joinPoint.getArgs()) + ">"
        );
    }
    
    @Before( "execution(* *Reservation(..))")
    public void logBeforeReservation(JoinPoint joinPoint){

        logger.info("<timestamp="+ LocalDateTime.now()+
                ", user=?????" +
                ", operacion/metodo=" + joinPoint.getSignature().getName()+
                ", parametros=" + Arrays.toString(joinPoint.getArgs()) + ">"
        );
    }
}
