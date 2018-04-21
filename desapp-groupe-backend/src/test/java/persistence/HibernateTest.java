package persistence;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import model.Publication;
import service.PublicationService;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({ "/META-INF/spring-persistence-context.xml", "/META-INF/spring-services-context.xml" })
public class HibernateTest {

    @Autowired	
    private PublicationService publicationService;

    @Test
    public void testSave() {
        publicationService.save(new Publication());
        Assert.assertEquals(1, publicationService.retriveAll().size());
    }

}
