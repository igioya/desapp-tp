package utils;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.classes;

import javax.persistence.Entity;

import org.junit.Test;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;

public class ArchitectureTest {

	JavaClasses classes = new ClassFileImporter().importPackages("model", "persistence", "service", "webservice");

	@Test
	public void DAOs_must_reside_in_persistence_package() {
		System.out.println(classes);

		classes().that().haveNameMatching(".*DAO").should().resideInAPackage("..persistence..")
				.as("DAOs should reside in a package '..persistence..'").check(classes);
	}

	@Test
	public void Services_must_reside_in_service_package() {
		classes().that().haveNameMatching(".*Service").should().resideInAPackage("..service..")
				.as("DAOs should reside in a package '..service..'").check(classes);
	}

	@Test
	public void Controllers_must_reside_in_webservice_package() {
		classes().that().haveNameMatching(".*Controller").should().resideInAPackage("..webservice..")
				.as("DAOs should reside in a package '..webservice..'").check(classes);
	}

	@Test
	public void entities_must_reside_in_model_package() {
		classes().that().areAnnotatedWith(Entity.class).should().resideInAPackage("..model..")
				.as("Entities should reside in a package '..model..'").check(classes);
	}

	@Test
	public void services_should_only_be_accessed_by_controllers_or_other_services() {
		classes().that().resideInAPackage("..service..").should().onlyBeAccessed()
				.byAnyPackage("..webservice..", "..service..").check(classes);
	}
	/*
	@Test
    public void services_should_not_access_controllers() {
        classes().that().resideInAPackage("..utils..")
                .should().accessClassesThat().resideInAPackage("..controller..").check(classes);
    }

    @Test
    public void persistence_should_not_access_services() {
        classes().that().resideInAPackage("..persistence..")
                .should().accessClassesThat().resideInAPackage("..service..").check(classes);
    }
*/

}
